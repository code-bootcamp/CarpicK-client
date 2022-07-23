import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN, LOGOUT } from "./Login.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal3 from "../../commons/modals/modal3/Modal3";
import Modal4 from "../../commons/modals/modal4/Modal4";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [logout] = useMutation(LOGOUT);
   const [, setAccessToken] = useRecoilState(accessTokenState);
   const [, setGoogleToken] = useState();

   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");

   const [, response, promptAsync] = Google.useAuthRequest({
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
      }
   }, [response]);

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
            const result = await login({
               variables: {
                  email,
                  password,
               },
            });

            AsyncStorage.setItem("accessToken", result.data.login);
            setAccessToken(result.data.login);
         } catch (error: any) {
            setErrMsg(error.message);
            setOpenModal(true);
         }
      }
   };

   const onPressLogout = async () => {
      try {
         await logout();
      } catch (error: any) {
         return (
            <Modal4
               title="로그아웃 에러"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
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
