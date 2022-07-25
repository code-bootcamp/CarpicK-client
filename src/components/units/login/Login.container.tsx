import * as WebBrowser from "expo-web-browser";
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
import * as GoogleSignIn from "expo-google-sign-in";
import { Platform } from "react-native";
// import * as Google from "expo-auth-session/providers/google"; // Only Dev

WebBrowser.maybeCompleteAuthSession();

export default function LoginPage({ navigation }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [login] = useMutation(LOGIN);
   const [logout] = useMutation(LOGOUT);
   const [, setAccessToken] = useRecoilState(accessTokenState);
   const [googleToken, setGoogleToken] = useState();
   const [isTokenReady, setIsTokenReady] = useState(false);

   const [openLoading, setOpenLoading] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");

   // const [, response, promptAsync] = Google.useAuthRequest({ // Only Dev
   //    expoClientId:
   //       "599686686405-02oj30siseoh7a559pc9mvlrj3f1f58o.apps.googleusercontent.com",
   //    iosClientId:
   //       "599686686405-tk0q9u21ecdajc65lrq2sge3sik20blh.apps.googleusercontent.com",
   //    androidClientId:
   //       "599686686405-bdp7u68bm7c6q9kul41o8ujmcitf285p.apps.googleusercontent.com",
   //    webClientId:
   //       "599686686405-ob38dmk26hnqhuc2i2dfcmj9pq7bvnjl.apps.googleusercontent.com",
   // });

   //구글 로그인 설정 apk alone
   const googleSignIn = async () => {
      setOpenLoading(false);
      setIsTokenReady(false);
      await GoogleSignIn.initAsync({
         signInType: GoogleSignIn.TYPES.DEFAULT,
         clientId:
            Platform.OS === "android"
               ? "599686686405-bdp7u68bm7c6q9kul41o8ujmcitf285p.apps.googleusercontent.com"
               : "599686686405-tk0q9u21ecdajc65lrq2sge3sik20blh.apps.googleusercontent.com",
         scopes: [
            GoogleSignIn.SCOPES.OPEN_ID,
            GoogleSignIn.SCOPES.EMAIL,
            GoogleSignIn.SCOPES.PROFILE,
         ],
      });
      //사용자가 Play 서비스가 아직 최신 상태가 아닌 경우 Play 서비스를 업데이트할 수 있는 모달 제공
      await GoogleSignIn.askForPlayServicesAsync();
      //구글 로그인으로 이동 및 response 반환
      const { type, user } = await GoogleSignIn.signInAsync();

      if (type === "success") {
         setGoogleToken(user?.auth?.accessToken);
         setIsTokenReady(true);
         setOpenLoading(true);
      }
   };

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

   // useEffect(() => { // Only Dev
   //    if (response?.type === "success") {
   //       setGoogleToken(response.authentication?.accessToken);
   //       setOpenLoading(true);
   //    }
   // }, [response]);

   useEffect(() => {
      if (isTokenReady) socialLogin();
   }, [googleToken, isTokenReady]);

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
            googleSignIn={googleSignIn}
         />
      </>
   );
}
