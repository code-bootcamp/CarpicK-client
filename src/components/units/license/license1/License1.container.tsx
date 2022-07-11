import License1PageUI from "./License1.presenter";
import { useMutation } from "@apollo/client";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import { useEffect, useState } from "react";
import { CREATE_USER } from "./License1.quries";

export default function License1Page({ navigation, route }) {
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
         const result = await createUser({
            variables: {
               createUserInput: {
                  ...data,
               },
            },
         });
         setMsg("회원가입이 완료되었습니다.");
         setOpenModal(true);
         console.log("this is result", result);
      } catch (error) {
         console.log("this is error", error);
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
