import IdResultPageUI from "./IdResult.presenter";

export default function IdResultPage({ navigation }) {
   const onPressToLogin = () => {
      navigation.navigate("login");
   };

   return <IdResultPageUI onPressToLogin={onPressToLogin} />;
}
