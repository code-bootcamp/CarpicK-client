import IdResultPageUI from "./IdResult.presenter";

export default function IdResultPage({ navigation, route }) {
   console.log("thisi idResult route Params", route.params);

   const onPressToLogin = () => {
      navigation.navigate("login");
   };

   return <IdResultPageUI onPressToLogin={onPressToLogin} />;
}
