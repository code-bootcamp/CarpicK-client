import UserGuidePageUI from "./UserGuide.presenter";

export default function UserGuidePage({ navigation }) {
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return <UserGuidePageUI onPress={onPressToCsMain} />;
}
