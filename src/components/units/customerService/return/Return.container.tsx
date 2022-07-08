import ReturnUI from "./Return.presenter";

export default function ReturnPage({ navigation }) {
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return <ReturnUI onPress={onPressToCsMain} />;
}
