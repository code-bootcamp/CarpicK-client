import { useMutation } from "@apollo/client";
import { useState } from "react";
import LoginPageUI from "./Login.presenter";
import { LOGIN } from "./Login.queries";

export default function LoginPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);

   const onChangeEmail = (e) => {
      setEmail(e.nativeEvent.text);
   };

   const onChangePassword = (e) => {
      setPassword(String(e.nativeEvent.text));
   };

   const onPressJoin = () => {
      navigation.navigate("joinStack");
   };

   const onPressLogin = async () => {
      try {
         console.log(email, password);
         const result = await login({
            variables: {
               email,
               password,
            },
         });
         console.log("this is result", result);
      } catch (error) {
         console.log("this is error", error);
      }
   };

   return (
      <LoginPageUI
         onPressLogin={onPressLogin}
         onPressJoin={onPressJoin}
         onChangeEmail={onChangeEmail}
         onChangePassword={onChangePassword}
      />
   );
}
