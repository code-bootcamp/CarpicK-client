import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../commons/modals/modal3/Modal3";
import PasswordResetPageUI from "./PasswordReset.presenter";
import { FETCH_LOGIN_USER, ISVALID_EMAIL } from "./PasswordReset.queries";

export default function PasswordResetPage({ navigation }) {
   const [openModal, setOpenModal] = useState(false);
   const [msg, setMsg] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [phoneTruthNum, setPhoneTruthNum] = useState("");
   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");
   const [isValidEmail, setIsValidEmail] = useState(false);

   // const { data, refetch } = useQuery(FETCH_LOGIN_USER);
   const [checkEmail] = useMutation(ISVALID_EMAIL);

   const onPressSMS = async () => {
      // refetch();
      // console.log(data);
      try {
         const result = await checkEmail({
            variables: {
               email,
            },
         });
         console.log(result);
         if (result.data.isValidEmail.isValid) {
            setMsg("아이디를 확인해주세요.");
            setOpenModal(true);
            setIsValidEmail(true);
         }
         if (!result.data.isValidEmail.isValid) {
            if (result.data.isValidEmail.phone === phone.split("-").join("")) {
               setMsg("휴대폰으로 인증번호가 전송되었습니다.");
               setOpenModal(true);
            } else {
               setMsg("휴대폰번호가 일치하지 않습니다.");
               setOpenModal(true);
            }
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
         <PasswordResetPageUI
            phone={phone}
            setEmail={setEmail}
            setPhone={setPhone}
            setPhoneTruthNum={setPhoneTruthNum}
            setPassword={setPassword}
            setPasswordAgain={setPasswordAgain}
            onPressSMS={onPressSMS}
         />
      </>
   );
}
