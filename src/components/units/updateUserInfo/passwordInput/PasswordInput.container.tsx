import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordInputUI from "./PasswordInput.presenter";
import { FETCH_LOGIN_USER, LOGIN } from "./PasswordInput.queries";

export default function PasswordInputPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");
   const [login] = useMutation(LOGIN);
   const { data } = useQuery(FETCH_LOGIN_USER);

   // console.log(data.fetchLoginUser);
   console.log(password);

   useEffect(() => {
      setEmail(data.fetchLoginUser.email);
   }, [data]);

   const onPressToUpdateMyInfo = () => {
      navigation.navigate("updateMyInfoPage", { data: data.fetchLoginUser });
   };

   const onPressLoginCheck = async () => {
      if (email && password) {
         try {
            console.log(email, password);
            const result = await login({
               variables: {
                  email,
                  password,
               },
            });
            onPressToUpdateMyInfo();
         } catch (error) {
            console.log("this is error", error);
            setErrMsg(error.message);
            setOpenModal(true);
         }
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
         <PasswordInputUI
            onPressLoginCheck={onPressLoginCheck}
            setPassword={setPassword}
         />
      </>
   );
}
