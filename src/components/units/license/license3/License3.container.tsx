import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import LoadingCircle from "../../../commons/loadingCircle/LoadingCircle";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import Modal4 from "../../../commons/modals/modal4/Modal4";
import License3PageUI from "./License3.presenter";
import { CHECK_LICENSE, CREATE_USER } from "./License3.quries";

export default function License3Page({ navigation, route }: any) {
   const [data3, setData3] = useState({});
   const [isLoading, setIsLoading] = useState(false);
   const [uri, setUri] = useState();
   const [specialNumber, setSpecialNumber] = useState({});
   const [msg, setMsg] = useState("");
   const [isAuth, setIsAuth] = useState(false);
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openSubmitButton, setOpenSubmitButton] = useState(false);
   const [checkLicense] = useMutation(CHECK_LICENSE);
   const [createUser] = useMutation(CREATE_USER);

   useEffect(() => {
      setData3({
         ...route.params.data2,
      });
      setSpecialNumber(route.params.result.SpecialNumber);
      setUri(route.params.uri);
   }, []);

   const onPressGoBack = () => {
      navigation.navigate("license2");
      route.params.setIsPhoto(false);
   };

   const onPressCheckLicense = async () => {
      if (route.params.data2.name !== route.params.result.Name) {
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
         setIsLoading(true);
         const result = await checkLicense({
            variables: { ...rest, SpecialNumber: specialNumber },
         });
         setIsLoading(false);

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
         await createUser({
            variables: {
               createUserInput: {
                  email: data3.email,
                  name: data3.name,
                  password: data3.password,
                  phone: data3.phone,
                  isAuth,
               },
            },
         });
         setMsg("회원가입이 완료되었습니다.");
         setOpenModal2(true);
      } catch (error: any) {
         return (
            <Modal4
               title="회원가입 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressToLogin = () => {
      setOpenModal2(false);
      navigation.navigate("login");
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
               positive={onPressToLogin}
            />
         )}
         {isLoading && <LoadingCircle />}
         <License3PageUI
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
