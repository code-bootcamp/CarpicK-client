import UserGuideAlonePageUI from "./userGuideAlone.presenter";

export default function UserGuideAlonePage({ navigation }) {
   const onPressToMain = () => {
      navigation.navigate("main");
   };
   return <UserGuideAlonePageUI onPress={onPressToMain} />;
}
