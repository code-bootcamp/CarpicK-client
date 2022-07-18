import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordResetPage3UI from "./PasswordReset3.presenter";
import { RESET_PWD } from "./PasswordReset3.queries";
const passwordRegExp = /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,16}$/;

export default function PasswordResetPage3({ navigation, route }) {
   const [email, setEmail] = useState("");
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [msg, setMsg] = useState("");
   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");
   const [isVaildPassword, setIsVaildPassword] = useState(false);
   const [resetPwd] = useMutation(RESET_PWD);

   useEffect(() => {
      setEmail(route.params.email);
   }, []);

   const onChangePassword = (text) => {
      setPassword(text);
      setIsVaildPassword(passwordRegExp.test(text));
   };

   const onPressResetPassword = async () => {
      if (password !== passwordAgain) {
         setMsg(`비밀번호가 서로다릅니다.\n다시확인해주세요`);
         setOpenModal1(true);
         return;
      }

      try {
         const result = await resetPwd({
            variables: {
               email,
               password,
            },
         });
         setMsg("비밀번호가 변경되었습니다.");
         setOpenModal2(true);
         console.log(result);
      } catch (error) {
         console.log("Error:", error);
         setMsg(error.message);
         setOpenModal1(true);
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
         <PasswordResetPage3UI
            passwordAgain={passwordAgain}
            onChangePassword={onChangePassword}
            setEmail={setEmail}
            setPassword={setPassword}
            setPasswordAgain={setPasswordAgain}
            isVaildPassword={isVaildPassword}
            onPressResetPassword={onPressResetPassword}
         />
      </>
   );
}
