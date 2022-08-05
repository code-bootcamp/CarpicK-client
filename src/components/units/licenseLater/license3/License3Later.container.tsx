import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import LoadingCircle from "../../../commons/loadingCircle/LoadingCircle";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import Modal4 from "../../../commons/modals/modal4/Modal4";
import License3LaterPageUI from "./License3Later.presenter";
import {
   CHECK_LICENSE,
   FETCH_LOGIN_USER,
   UPDATE_LICENSE,
} from "./License3Later.queries";

export default function License3LaterPage({ navigation, route }: any) {
   const [uri, setUri] = useState();
   const [specialNumber, setSpecialNumber] = useState({});
   const [msg, setMsg] = useState("");
   const [, setIsAuth] = useState(false);
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openLoading, setOpenLoading] = useState(false);
   const [openSubmitButton, setOpenSubmitButton] = useState(false);
   const [checkLicense] = useMutation(CHECK_LICENSE);
   const [updateLicense] = useMutation(UPDATE_LICENSE);

   const { data } = useQuery(FETCH_LOGIN_USER, { fetchPolicy: "no-cache" });

   useEffect(() => {
      setUri(route.params.uri);
      setSpecialNumber(route.params.result.SpecialNumber);
   }, []);

   const onPressGoBack = () => {
      navigation.navigate("license2Later");
      route.params.setIsPhoto(false);
   };

   const onPressCheckLicense = async () => {
      if (data.fetchLoginUser.name !== route.params.result.Name) {
         setMsg("이름이 일치하지 않습니다.\n본인 명의의 면허증만 가능합니다.");
         setOpenModal1(true);
         return;
      }

      const { Fail, SpecialNumber, ...rest } = route.params.result;
      if (
         route.params.result.BirthDate &&
         route.params.result.LicNumber &&
         route.params.result.Name &&
         specialNumber
      ) {
         setOpenLoading(true);
         const result = await checkLicense({
            variables: { ...rest, SpecialNumber: specialNumber },
         });
         setOpenLoading(false);
         const policeReturn = JSON.parse(result.data.checkLicense);

         if (
            policeReturn.Status === "OK" &&
            policeReturn.StatusSeq === 0 &&
            policeReturn.Message.includes("식별번호가 일치합니다.")
         ) {
            setMsg("면허인증이 완료 되었습니다.");
            setIsAuth(true);
            setOpenModal1(true);
            setOpenSubmitButton(true);
         } else {
            setMsg("면허인증에 실패하였습니다.\n다시 인증해주세요.");
            setOpenModal1(true);
         }
      } else {
         setMsg("면허증 정보를 다시 확인해주세요.");
         setOpenModal1(true);
      }
   };

   const onPressSubmit = async () => {
      try {
         await updateLicense({ variables: { isAuth: true } });

         setMsg("면허인증이 완료되었습니다.");
         setOpenModal2(true);
      } catch (error: any) {
         return (
            <Modal4
               title="먄허인증 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressToMain = () => {
      setOpenModal2(false);
      navigation.replace("mainStack");
   };

   return (
      <>
         {openModal1 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal1(false)}
            />
         )}
         {openModal2 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToMain}
            />
         )}
         {openLoading && <LoadingCircle />}
         <License3LaterPageUI
            result={route.params.result}
            base64={route.params.base64}
            openSubmitButton={openSubmitButton}
            onPressGoBack={onPressGoBack}
            onPressCheckLicense={onPressCheckLicense}
            onPressSubmit={onPressSubmit}
            setSpecialNumber={setSpecialNumber}
            uri={uri}
         />
      </>
   );
}
