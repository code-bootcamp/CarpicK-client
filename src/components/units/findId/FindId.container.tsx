import { useMutation, useApolloClient } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../commons/modals/modal3/Modal3";
import Modal4 from "../../commons/modals/modal4/Modal4";
import FindIdPageUI from "./FindId.presenter";
import { SEND_SMS, CHECK_TOKEN, FETCH_EMAIL } from "./FindId.queries";

export default function FindIdPage({ navigation }: any) {
   const client = useApolloClient();
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [token, setToken] = useState("");

   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [openTimer, setOpenTimer] = useState(false);
   const [openRedo, setOpenRedo] = useState(false);
   const [isValidPhone, setIsValidPhone] = useState(false);

   const [sendSMS] = useMutation(SEND_SMS);
   const [checkToken] = useMutation(CHECK_TOKEN);

   const onPressSMS = async () => {
      setIsValidPhone(false);
      if (!phone) return;
      try {
         const resultId = await client.query({
            query: FETCH_EMAIL,
            variables: {
               phone: phone.split("-").join(""),
            },
            fetchPolicy: "network-only",
         });

         if (resultId.data.fetchEmail === "등록되지 않은 번호입니다") {
            setMsg("등록되어있지 않는 전화번호입니다.");
            setOpenModal(true);
            return;
         } else {
            setEmail(resultId.data.fetchEmail);
            setOpenTimer(true);
            setMsg("3분 이내에 인증번호를 입력해주세요.");
            setOpenModal(true);

            try {
               await sendSMS({
                  variables: {
                     phone: phone.split("-").join(""),
                  },
               });
            } catch (error: any) {
               return (
                  <Modal4
                     title="문자 전송 실패"
                     contents={error.message}
                     positiveText="확인"
                     positive={() => {}}
                  />
               );
            }
         }
      } catch (error: any) {
         return (
            <Modal4
               title="휴대폰 인증 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressToIdResult = () => {
      navigation.navigate("idResult", { email });
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
            setOpenTimer={setOpenTimer}
            setOpenRedo={setOpenRedo}
            onPressSMS={onPressSMS}
            onPressCheckPhoneTruthNum={onPressCheckPhoneTruthNum}
            onPressToIdResult={onPressToIdResult}
         />
      </>
   );
}
