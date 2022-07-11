import { useState } from "react";
import IntroPageUI from "./Intro.presenter";

export default function IntroPage({ navigation }) {
   const [activeTab, setActiveTab] = useState(1);

   const onPressLogin = () => {
      navigation.navigate("login");
   };

   const onPressJoin = () => {
      navigation.navigate("joinStack");
   };

   return (
      <IntroPageUI
         onPressLogin={onPressLogin}
         onPressJoin={onPressJoin}
         activeTab={activeTab}
         setActiveTab={setActiveTab}
      />
   );
}
