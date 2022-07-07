import MainPageUI from "./Main.presenter";

export default function MainPage({ navigation }) {
   const onPressToMap = () => {
      navigation.navigate("map");
   };
   return <MainPageUI onPressToMap={onPressToMap} />;
}
