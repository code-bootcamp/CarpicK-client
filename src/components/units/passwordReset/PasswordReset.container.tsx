import { useState } from "react";
import PasswordResetPageUI from "./PasswordReset.presenter";

export default function PasswordResetPage({ navigation }) {
   const [phone, setPhone] = useState("");

   const onChanePhone = (e) => {
      setPhone(e.nativeEvent.text);
   };

   return <PasswordResetPageUI phone={phone} onChanePhone={onChanePhone} />;
}
