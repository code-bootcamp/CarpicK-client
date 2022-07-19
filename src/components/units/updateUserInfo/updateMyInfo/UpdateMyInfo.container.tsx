import { useMutation } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import UpdateMyInfoUI from "./UpdateMyInfo.presenter";
import {
   CHECK_TOKEN,
   SEND_SMS,
   UPDATE_USER_PHONE,
} from "./UpdateMyInfo.queries";

export default function UpdateMyInfoPage({ navigation, route }) {
   const [isSelected, setIsSelected] = useState(true);
   const [phone, setPhone] = useState("");
   const [token, setToken] = useState("");

   const [msg, setMsg] = useState("");
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openTimer, setOpenTimer] = useState(false);
   const [openRedo, setOpenRedo] = useState(false);
   const [isValidPhone, setIsValidPhone] = useState(false);
   const [isValidPwd, setIsValidPwd] = useState(false);
   const [isEditable, setIsEditable] = useState(true);

   const [sendSMS] = useMutation(SEND_SMS);
   const [checkToken] = useMutation(CHECK_TOKEN);
   const [updateUserPhone] = useMutation(UPDATE_USER_PHONE);

   const onPressToMain = () => {
      setOpenModal2(false);
      navigation.replace("mainStack");
   };

   const onPressSMS = async () => {
      setIsValidPhone(false);
      setIsEditable(false);
      if (!phone) return;
      try {
         setOpenTimer(true);
         setMsg("3분 이내에 인증번호를 입력해주세요.");
         setOpenModal1(true);

         const result = await sendSMS({
            variables: {
               phone: phone.split("-").join(""),
            },
         });
         console.log("this is sms", result);
      } catch (error) {
         console.log("ErrorMsg :", error.message);
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
         setOpenModal1(true);
         setOpenRedo(false);
      } else {
         setMsg("인증번호가 일치하지 않습니다.");
         setOpenModal1(true);
      }
   };

   const onPressChangePhoneNum = async () => {
      if (!token && !phone) return;

      try {
         const result = await updateUserPhone({
            variables: {
               phone,
            },
         });
         setMsg("전화번호 변경이 완료되었습니다.");
         setOpenModal2(true);
      } catch (error) {
         console.log("this is error", error);
      }
   };

   const onPressChangePwd = async () => {
      if (!token && !phone) return;

      const result = await checkToken({
         variables: {
            token,
         },
      });

      if (result.data.checkToken) {
         setOpenTimer(false);
         setIsValidPhone(true);
         setMsg("인증이 완료되었습니다.");
         setOpenModal1(true);
         setOpenRedo(false);
      } else {
         setMsg("인증번호가 일치하지 않습니다.");
         setOpenModal1(true);
      }
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
         <UpdateMyInfoUI
            isSelected={isSelected}
            isEditable={isEditable}
            setIsSelected={setIsSelected}
            phone={phone}
            openTimer={openTimer}
            openRedo={openRedo}
            isValidPhone={isValidPhone}
            setPhone={setPhone}
            setToken={setToken}
            onPress={onPressToMain}
            onPressSMS={onPressSMS}
            onPressCheckPhoneTruthNum={onPressCheckPhoneTruthNum}
            onPressChangePhoneNum={onPressChangePhoneNum}
            onPressChangePwd={onPressChangePwd}
            name={route.params.data.name}
            email={route.params.data.email}
         />
      </>
   );
}
