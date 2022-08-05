import { useMutation } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordResetPage1UI from "./PasswordReset1.presenter";
import { IS_VALID_EMAIL } from "./PasswordReset1.queries";

export default function PasswordResetPage1({ navigation }: any) {
   const [openModal, setOpenModal] = useState(false);
   const [msg, setMsg] = useState("");
   const [email, setEmail] = useState("");
   const [checkEmail] = useMutation(IS_VALID_EMAIL);

   const onPressNext = async () => {
      try {
         const result = await checkEmail({ variables: { email } });
         if (result.data.isValidEmail.isValid) {
            setMsg("아이디를 확인해주세요.");
            setOpenModal(true);
         }
         if (!result.data.isValidEmail.isValid) {
            navigation.navigate("passwordReset2", { email });
         }
      } catch (error: any) {
         setMsg(error.message);
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
         <PasswordResetPage1UI
            setEmail={setEmail}
            onPressNext={onPressNext}
            email={email}
         />
      </>
   );
}
