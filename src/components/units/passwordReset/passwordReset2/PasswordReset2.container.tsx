import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordResetPage2UI from "./PasswordReset2.presenter";
import { FETCH_LOGIN_USER, ISVALID_EMAIL } from "./PasswordReset2.queries";

export default function PasswordResetPage2({ navigation }) {
   const [openModal, setOpenModal] = useState(false);
   const [msg, setMsg] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [token, setToken] = useState("");
   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");

   // const { data, refetch } = useQuery(FETCH_LOGIN_USER);
   const [checkEmail] = useMutation(ISVALID_EMAIL);

   const onPressSMS = async () => {
      // refetch();
      // console.log(data);
      if (!email) return;
      try {
         const result = await checkEmail({
            variables: {
               email,
            },
         });
         if (result.data.isValidEmail.isValid) {
            setMsg("사용가능한 이메일 입니다.");
            setOpenModal(true);
         }
         console.log(result);

         if (result.data.isValidEmail.phone === phone.split("-").join("")) {
            setMsg("휴대폰으로 인증번호가 전송되었습니다.");
            setOpenModal(true);
         } else {
            setMsg("휴대폰번호가 일치하지 않습니다.");
            setOpenModal(true);
         }
      } catch (error) {
         console.log(error.message);
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
         <PasswordResetPage2UI
            phone={phone}
            setEmail={setEmail}
            setPhone={setPhone}
            setToken={setToken}
            setPassword={setPassword}
            setPasswordAgain={setPasswordAgain}
            onPressSMS={onPressSMS}
         />
      </>
   );
}
