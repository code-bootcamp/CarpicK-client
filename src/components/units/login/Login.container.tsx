import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN, LOGOUT } from "./Login.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal3 from "../../commons/modals/modal3/Modal3";

export default function LoginPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [logout] = useMutation(LOGOUT);
   const [_, setAccessToken] = useRecoilState(accessTokenState);
   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");

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
            AsyncStorage.setItem("accessToken", result.data.login);
            setAccessToken(result.data.login);
            // console.log("this is result", result);
         } catch (error) {
            console.log("this is error", error);
            setErrMsg(error.message);
            setOpenModal(true);
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
      <>
         {openModal && (
            <Modal3
               contents={errMsg}
               positiveText="확인"
               positive={() => setOpenModal(false)}
            />
         )}
         <LoginPageUI
            onPressLogin={onPressLogin}
            onPressLogout={onPressLogout}
            onPressToFindId={onPressToFindId}
            onPressToPasswordReset={onPressToPasswordReset}
            onPressToJoin={onPressToJoin}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
         />
      </>
   );
}
