import License1PageUI from "./License1.presenter";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_USER } from "./License1.quries";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import Modal4 from "../../../commons/modals/modal4/Modal4";

export default function License1Page({ navigation, route }: any) {
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [createUser] = useMutation(CREATE_USER);
   const [data, setData] = useState({});

   useEffect(() => {
      setData({
         email: route.params.email,
         name: route.params.name,
         password: route.params.password,
         phone: route.params.phone.split("-").join(""),
         isAuth: false,
      });
   }, []);

   const onPressNext = () => {
      navigation.navigate("license2", {
         data,
      });
   };

   const onPressSubmitNoLicense = async () => {
      try {
         await createUser({
            variables: {
               createUserInput: {
                  ...data,
               },
            },
         });
         setMsg("회원가입이 완료되었습니다.");
         setOpenModal(true);
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
      setOpenModal(false);
      navigation.navigate("login");
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToLogin}
            />
         )}
         <License1PageUI
            onPressNext={onPressNext}
            onPressSubmitNoLicense={onPressSubmitNoLicense}
         />
      </>
   );
}
