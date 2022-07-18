import { useEffect, useState } from "react";
import IdResultPageUI from "./IdResult.presenter";

export default function IdResultPage({ navigation, route }) {
   const [email, setEmail] = useState("");

   useEffect(() => {
      setEmail(route.params.email);
   }, []);

   const onPressToLogin = () => {
      navigation.navigate("login");
   };

   return <IdResultPageUI onPressToLogin={onPressToLogin} email={email} />;
}
