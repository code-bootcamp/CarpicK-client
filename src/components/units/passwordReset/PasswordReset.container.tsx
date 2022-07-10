import { useQuery } from "@apollo/client";
import { useState } from "react";
import PasswordResetPageUI from "./PasswordReset.presenter";
import { FETCH_USER } from "./PasswordReset.queries";

export default function PasswordResetPage({ navigation }) {
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [phoneTruthNum, setPhoneTruthNum] = useState("");
   const [password, setPassword] = useState("");
   const [passwordAgain, setPasswordAgain] = useState("");

   const { data, refetch } = useQuery(FETCH_USER, {
      variables: { email: "aaa@test.com" },
   });

   const onPressSMS = () => {
      refetch();
      console.log(data);
   };

   return (
      <PasswordResetPageUI
         phone={phone}
         setEmail={setEmail}
         setPhone={setPhone}
         setPhoneTruthNum={setPhoneTruthNum}
         setPassword={setPassword}
         setPasswordAgain={setPasswordAgain}
         onPressSMS={onPressSMS}
      />
   );
}
