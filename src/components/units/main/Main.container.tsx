import MainPageUI from "./Main.presenter";
import { Linking } from "react-native";
import { useAuth } from "../../../commons/hooks/useAuth";

export default function MainPage({ navigation }) {
   const onPressToMap = () => {
      navigation.navigate("map");
   };

   const onPressToCarRegist = () => {
      navigation.navigate("registrationStack");
   };

   const onPressToCarpicKey = () => {
      navigation.navigate("carpicKeyStack");
   };

   const onPressToPopularCar = () => {
      navigation.navigate("popularCar");
   };

   const onPressToUserGuide = () => {
      navigation.navigate("userGuide");
   };

   const onPressToCustomerService = () => {
      navigation.navigate("customerService");
   };

   const onPressToRentHistoryStack = () => {
      navigation.navigate("rentHistoryStack");
   };

   const onPressToLicense = () => {
      navigation.navigate("licenseLater");
   };

   const onPressCall = () => {
      const url = "tel://12341234";
      Linking.openURL(url);
   };

   return (
      <MainPageUI
         onPressToMap={onPressToMap}
         onPressCall={onPressCall}
         onPressToCarRegist={onPressToCarRegist}
         onPressToCarpicKey={onPressToCarpicKey}
         onPressToPopularCar={onPressToPopularCar}
         onPressToUserGuide={onPressToUserGuide}
         onPressToCustomerService={onPressToCustomerService}
         onPressToRentHistoryStack={onPressToRentHistoryStack}
         onPressToLicense={onPressToLicense}
      />
   );
}
