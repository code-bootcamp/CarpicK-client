import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordResetPage1UI from "./PasswordReset1.presenter";
import { FETCH_LOGIN_USER, ISVALID_EMAIL } from "./PasswordReset1.queries";

export default function PasswordResetPage1({ navigation }) {
   const [openModal, setOpenModal] = useState(false);
   const [msg, setMsg] = useState("");
   const [email, setEmail] = useState("");
   const [isValidEmail, setIsValidEmail] = useState(false);

   // const { data, refetch } = useQuery(FETCH_LOGIN_USER);
   const [checkEmail] = useMutation(ISVALID_EMAIL);

   const onPressNext = async () => {
      try {
         const result = await checkEmail({ variables: { email } });
         if (result.data.isValidEmail.isValid) {
            setMsg("아이디를 확인해주세요.");
            setOpenModal(true);
         }
         if (!result.data.isValidEmail.isValid) {
            navigation.navigate("passwordReset2");
         }
      } catch (error) {
         console.log("Error:", error);
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
