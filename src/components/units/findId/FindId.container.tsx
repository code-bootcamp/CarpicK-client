import FindIdPageUI from "./FindId.presenter";

export default function FindIdPage({ navigation }) {
   const onPressToIdResult = () => {
      navigation.navigate("idResult");
   };

   return <FindIdPageUI onPressToIdResult={onPressToIdResult} />;
}
