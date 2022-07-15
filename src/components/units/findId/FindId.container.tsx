import { useMutation } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../commons/modals/modal3/Modal3";
import FindIdPageUI from "./FindId.presenter";
import { CHECK_TOKEN, SEND_SMS } from "./FindId.queries";

export default function FindIdPage({ navigation }) {
   const [phone, setPhone] = useState("");
   const [token, setToken] = useState("");

   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [openTimer, setOpenTimer] = useState(false);
   const [openRedo, setOpenRedo] = useState(false);
   const [isValidPhone, setIsValidPhone] = useState(false);

   const [sendSMS] = useMutation(SEND_SMS);
   const [checkToken] = useMutation(CHECK_TOKEN);

   const onPressToIdResult = () => {
      navigation.navigate("idResult", { phone });
   };

   const onPressSMS = async () => {
      setIsValidPhone(false);
      if (!phone) return;
      setOpenTimer(true);
      setMsg("3분 이내에 인증번호를 입력해주세요.");
      setOpenModal(true);
      try {
         const result = await sendSMS({
            variables: {
               phone: phone.split("-").join(""),
            },
         });
         console.log("this is sms", result);
      } catch (error) {
         console.log(error.message);
      }
   };

   const onPressCheckPhoneTruthNum = async () => {
      if (!token) return;

      const result = await checkToken({
         variables: {
            token,
         },
      });

      if (result.data.checkToken) {
         setOpenTimer(false);
         setIsValidPhone(true);
         setMsg("인증이 완료되었습니다.");
         setOpenModal(true);
         setOpenRedo(false);
      } else {
         setMsg("인증번호가 일치하지 않습니다.");
         setOpenModal(true);
      }
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal(false)}
            />
         )}
         <FindIdPageUI
            phone={phone}
            openTimer={openTimer}
            openRedo={openRedo}
            isValidPhone={isValidPhone}
            setPhone={setPhone}
            setToken={setToken}
            onPressSMS={onPressSMS}
            onPressCheckPhoneTruthNum={onPressCheckPhoneTruthNum}
            onPressToIdResult={onPressToIdResult}
         />
      </>
   );
}
