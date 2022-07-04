import IntroPageUI from "./Intro.presenter";

export default function IntroPage({ navigation }) {
   const onPressLogin = () => {
      navigation.navigate("login");
   };

   const onPressJoin = () => {
      navigation.navigate("joinStack");
   };

   return <IntroPageUI onPressLogin={onPressLogin} onPressJoin={onPressJoin} />;
}
