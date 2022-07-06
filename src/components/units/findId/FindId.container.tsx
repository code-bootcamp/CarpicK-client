import { useState } from "react";
import FindIdPageUI from "./FindId.presenter";

export default function FindIdPage({ navigation }) {
   const [phone, setPhone] = useState("");

   const onChanePhone = (e) => {
      setPhone(e.nativeEvent.text);
   };

   const onPressToIdResult = () => {
      navigation.navigate("idResult");
   };

   return (
      <FindIdPageUI
         phone={phone}
         onChanePhone={onChanePhone}
         onPressToIdResult={onPressToIdResult}
      />
   );
}
