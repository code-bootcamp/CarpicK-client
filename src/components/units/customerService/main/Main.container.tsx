import MainPageUI from "./Main.presenter";

export default function MainPage({ navigation }) {
   const onPressToUserGuide = () => {
      navigation.navigate("userGuide");
   };

   const onPressToAccident = () => {
      navigation.navigate("accident");
   };

   const onPressToReserve = () => {
      navigation.navigate("reserve");
   };

   const onPressToReturn = () => {
      navigation.navigate("return");
   };

   return (
      <MainPageUI
         onPressToUserGuide={onPressToUserGuide}
         onPressToAccident={onPressToAccident}
         onPressToReserve={onPressToReserve}
         onPressToReturn={onPressToReturn}
      />
   );
}
