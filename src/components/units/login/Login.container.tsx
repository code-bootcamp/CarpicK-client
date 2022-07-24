import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginPageUI from "./Login.presenter";
import { LOGIN, LOGOUT, GOOGLE_LOGIN } from "./Login.queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal3 from "../../commons/modals/modal3/Modal3";
import Modal4 from "../../commons/modals/modal4/Modal4";
import LoadingCircle from "../../commons/loadingCircle/LoadingCircle";

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [logout] = useMutation(LOGOUT);
   const [, setAccessToken] = useRecoilState(accessTokenState);
   const [googleToken, setGoogleToken] = useState();

   const [openLoading, setOpenLoading] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");

   const [, response, promptAsync] = Google.useAuthRequest({
      expoClientId:
         "599686686405-02oj30siseoh7a559pc9mvlrj3f1f58o.apps.googleusercontent.com",
      iosClientId:
         "599686686405-tk0q9u21ecdajc65lrq2sge3sik20blh.apps.googleusercontent.com",
      androidClientId:
         "599686686405-bdp7u68bm7c6q9kul41o8ujmcitf285p.apps.googleusercontent.com",
      webClientId:
         "599686686405-ob38dmk26hnqhuc2i2dfcmj9pq7bvnjl.apps.googleusercontent.com",
      scopes: ["email", "profile", "phone"],
   });

   const [googleLogin] = useMutation(GOOGLE_LOGIN, {
      context: {
         headers: {
            authorization: `Bearer ${googleToken}`,
            "Content-Type": "application/json",
         },
      },
   });

   const socialLogin = () => {
      const result = googleLogin;

      result().then((rsp) => {
         setOpenLoading(false);
         AsyncStorage.setItem("accessToken", rsp.data.googleLogin);
         setAccessToken(rsp.data.googleLogin);
      });
   };

   useEffect(() => {
      if (response?.type === "success") {
         setGoogleToken(response.authentication?.accessToken);
         setOpenLoading(true);
      }
   }, [response]);

   useEffect(() => {
      socialLogin();
   }, [googleToken]);

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
         {openLoading && <LoadingCircle />}
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
