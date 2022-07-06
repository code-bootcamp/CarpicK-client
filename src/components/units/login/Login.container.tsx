import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN, LOGOUT } from "./Login.queries";

export default function LoginPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [_, setAccessToken] = useRecoilState(accessTokenState);
   const [logout] = useMutation(LOGOUT);

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
            // const accessToken = result.data.loginUser.accessToken;
            setAccessToken(result.data.login);
            console.log("this is result", result);
         } catch (error) {
            console.log("this is error", error);
         }
      }
   };

   const onPressLogout = async () => {
      try {
         const result = await logout();
         console.log("this is result", result);
      } catch (error) {
         console.log("this is error", error);
      }
   };

   return (
      <LoginPageUI
         onPressLogin={onPressLogin}
         onPressLogout={onPressLogout}
         onPressToFindId={onPressToFindId}
         onPressToPasswordReset={onPressToPasswordReset}
         onPressToJoin={onPressToJoin}
         onChangeEmail={onChangeEmail}
         onChangePassword={onChangePassword}
      />
   );
}
