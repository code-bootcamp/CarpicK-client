import { useMutation } from "@apollo/client";
import { useState } from "react";
import LoginPageUI from "./Login.presenter";
import { LOGIN } from "./Login.queries";

export default function LoginPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   // const [logout] = useMutation(LOGOUT);

   const onChangeEmail = (e) => {
      setEmail(e.nativeEvent.text);
   };

   const onChangePassword = (e) => {
      setPassword(String(e.nativeEvent.text));
   };

   const onPressToFindId = () => {
      navigation.navigate("findId");
   };

   const onPressToPasswordReset = () => {
      navigation.navigate("passwordReset");
   };

   const onPressToJoin = () => {
      navigation.navigate("joinStack");
   };

   const onPressLogin = async () => {
      if (email && password) {
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
      }
   };

   // const onPressLogout = async () => {
   //    try {
   //       console.log(email, password);
   //       const result = await logout({
   //          variables: {
   //             email,
   //             password,
   //          },
   //       });
   //       console.log("this is result", result);
   //    } catch (error) {
   //       console.log("this is error", error);
   //    }
   // };

   return (
      <LoginPageUI
         onPressLogin={onPressLogin}
         onPressToFindId={onPressToFindId}
         onPressToPasswordReset={onPressToPasswordReset}
         onPressToJoin={onPressToJoin}
         onChangeEmail={onChangeEmail}
         onChangePassword={onChangePassword}
      />
   );
}
