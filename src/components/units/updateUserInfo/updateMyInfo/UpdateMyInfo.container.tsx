import UpdateMyInfoUI from "./UpdateMyInfo.presenter";

export default function UpdateMyInfoPage({ navigation }) {
   const onPressToMain = () => {
      navigation.navigate("main");
   };
   return <UpdateMyInfoUI onPress={onPressToMain} />;
}
