import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import License3LaterPageUI from "./License3Later.presenter";
import { CHECK_LICENSE } from "./License3Later.queries";

export default function License3LaterPage({ navigation, route }) {
   const [uri, setUri] = useState();
   const [specialNumber, setSpecialNumber] = useState({});
   const [msg, setMsg] = useState("");
   const [isAuth, setIsAuth] = useState(false);
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openSubmitButton, setOpenSubmitButton] = useState(false);
   const [checkLicense] = useMutation(CHECK_LICENSE);

   useEffect(() => {
      setUri(route.params.uri);
      setSpecialNumber(route.params.result.SpecialNumber);
   }, []);

   const onPressGoback = () => {
      navigation.navigate("license2Later");
      route.params.setIsPhoto(false);
   };

   const onPressCheckLisense = async () => {
      const { Fail, SpecialNumber, ...rest } = route.params.result;
      console.log({ ...rest, SpecialNumber: specialNumber });
      if (
         route.params.result.BirthDate &&
         route.params.result.LicNumber &&
         route.params.result.Name &&
         specialNumber
      ) {
         const result = await checkLicense({
            variables: { ...rest, SpecialNumber: specialNumber },
         });
         console.log(
            "this is police return",
            JSON.parse(result.data.checkLicense)
         );
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

   const onPressSubmit = () => {};

   console.log("this is result", route.params.result);

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
               positive={onPressToLogin}
            />
         )}
         <License3LaterPageUI
            result={route.params.result}
            base64={route.params.base64}
            openSubmitButton={openSubmitButton}
            onPressGoback={onPressGoback}
            onPressCheckLisense={onPressCheckLisense}
            onPressSubmit={onPressSubmit}
            setSpecialNumber={setSpecialNumber}
            uri={uri}
         />
      </>
   );
}
