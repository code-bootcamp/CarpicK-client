import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN, LOGOUT } from "./Login.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal3 from "../../commons/modals/modal3/Modal3";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [logout] = useMutation(LOGOUT);
   const [_, setAccessToken] = useRecoilState(accessTokenState);
   const [googleToken, setGoogleToken] = useState();
   const [userInfo, setUserInfo] = useState();

   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");

   const [request, response, promptAsync] = Google.useAuthRequest({
      expoClientId:
         "326184472330-p2206o8g8r2jvuab4790b5pq9de1tnu5.apps.googleusercontent.com",
      iosClientId:
         "326184472330-i3vm3b1eop2l01ofp6mm1cobsdrk2nfk.apps.googleusercontent.com",
      androidClientId:
         "326184472330-nrm3dk8vfjfmkvmicvvms81ia34c1376.apps.googleusercontent.com",
      webClientId:
         "326184472330-p2206o8g8r2jvuab4790b5pq9de1tnu5.apps.googleusercontent.com",
   });

   useEffect(() => {
      if (response?.type === "success") {
         setGoogleToken(response.authentication?.accessToken);
         console.log(
            "this is google token",
            response.authentication?.accessToken
         );
      }
   }, [response]);

   const getUserDate = async () => {
      let userInfoResponse = await fetch("");
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
            setEmail={setEmail}
            setPassword={setPassword}
            promptAsync={promptAsync}
         />
      </>
   );
}
