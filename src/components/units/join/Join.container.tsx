import { useMutation } from "@apollo/client";
import { useState } from "react";
import JoinPageUI from "./Join.presenter";
import { CHECK_EMAIL, CREATE_USER } from "./Join.queries";

export default function JoinPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");
   const [phoneTruthNum, setPhoneTruthNum] = useState("");
   const [isValidEmail, setIsValidEmail] = useState(false);
   const [isValidPassword, setIsValidPassword] = useState(false);
   const [isCheckEmail, setIsCheckEmail] = useState({
      email: "",
      valid: false,
   });

   const [createUser] = useMutation(CREATE_USER);
   const [checkEmail] = useMutation(CHECK_EMAIL);

   const onChaneEmail = (e) => {
      setEmail(e.nativeEvent.text);
      const emailRegExp =
         /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (e.nativeEvent.text.match(emailRegExp) != null) {
         setIsValidEmail(true);
      } else setIsValidEmail(false);
   };

   const onChaneName = (e) => {
      setName(e.nativeEvent.text);
   };

   const onChanePhone = (e) => {
      setPhone(e.nativeEvent.text);
   };

   const onChanePassword = (e) => {
      setPassword(e.nativeEvent.text);
      const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

      if (
         e.nativeEvent.text.match(passwordRegExp) != null &&
         e.nativeEvent.text.length >= 8 &&
         e.nativeEvent.text.length <= 16
      ) {
         setIsValidPassword(true);
      } else setIsValidPassword(false);
   };

   const onChanePasswordAgain = (e) => {
      setPasswordAgain(e.nativeEvent.text);
   };

   const onChanePhoneTruthNum = (e) => {
      setPhoneTruthNum(e.nativeEvent.text);
   };

   const onPressNext = () => {
      // if (
      //    isValidEmail &&
      //    isValidPassword &&
      //    isCheckEmail.email === email &&
      //    isCheckEmail.valid &&
      //    password === passwordAgain
      // )
      navigation.navigate("license1");
   };

   const onPressCheckEmail = async () => {
      setIsCheckEmail({ email: "", valid: false });
      console.log("this is ischeck", isCheckEmail);
      try {
         const result = await checkEmail({
            variables: {
               email,
            },
         });
         if (result.data.checkEmail) {
            setIsCheckEmail({ email, valid: true });
         }
         console.log("this is result", result.data.checkEmail);
      } catch (error) {
         console.log(error.message);
      }
   };

   const onPressSubmit = async () => {
      console.log("email:", email);
      console.log("name:", name);
      console.log("password:", password);
      console.log("phone:", phone);

      if (
         isValidEmail &&
         isValidPassword &&
         isCheckEmail.email === email &&
         isCheckEmail.valid
      ) {
         try {
            const result = await createUser({
               variables: {
                  createUserInput: {
                     email,
                     name,
                     password,
                     phone: phone.split("-").join(""),
                  },
               },
            });
            console.log("this is result", result);
         } catch (error) {
            console.log("this is error", error);
         }
      }
   };

   return (
      <JoinPageUI
         phone={phone}
         onPressSubmit={onPressSubmit}
         onPressNext={onPressNext}
         onChaneEmail={onChaneEmail}
         onChaneName={onChaneName}
         onChanePhone={onChanePhone}
         onChanePassword={onChanePassword}
         onChanePasswordAgain={onChanePasswordAgain}
         onChanePhoneTruthNum={onChanePhoneTruthNum}
         onPressCheckEmail={onPressCheckEmail}
         isValidEmail={isValidEmail}
         isValidPassword={isValidPassword}
      />
   );
}
