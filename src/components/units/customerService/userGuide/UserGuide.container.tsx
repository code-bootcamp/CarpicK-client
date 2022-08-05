import UserGuidePageUI from "./UserGuide.presenter";

export default function UserGuidePage({ navigation }: any) {
   const onPressToCsMain = () => {
      navigation.goBack();
   };
   return <UserGuidePageUI onPress={onPressToCsMain} />;
}
