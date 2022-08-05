import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import PasswordInputUI from "./PasswordInput.presenter";
import { FETCH_LOGIN_USER, LOGIN } from "./PasswordInput.queries";

export default function PasswordInputPage({ navigation }: any) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [openModal, setOpenModal] = useState(false);
   const [errMsg, setErrMsg] = useState("");
   const [login] = useMutation(LOGIN);
   const { data } = useQuery(FETCH_LOGIN_USER);

   useEffect(() => {
      setEmail(data?.fetchLoginUser.email);
   }, [data]);

   const onPressToUpdateMyInfo = () => {
      navigation.navigate("updateMyInfoPage", { data: data.fetchLoginUser });
   };

   const onPressLoginCheck = async () => {
      if (email && password) {
         try {
            await login({
               variables: {
                  email,
                  password,
               },
            });
            onPressToUpdateMyInfo();
         } catch (error: any) {
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
