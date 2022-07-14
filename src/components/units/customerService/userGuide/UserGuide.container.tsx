import UserGuidePageUI from "./UserGuide.presenter";

export default function UserGuidePage({ navigation }) {
   const onPressToCsMain = () => {
      navigation.goBack();
   };
   return <UserGuidePageUI onPress={onPressToCsMain} />;
}
