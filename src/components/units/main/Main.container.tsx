import MainPageUI from "./Main.presenter";
import { Linking } from "react-native";

export default function MainPage({ navigation }) {
   const onPressToMap = () => {
      navigation.navigate("map");
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
         onPressToCustomerService={onPressToCustomerService}
         onPressToRentHistoryStack={onPressToRentHistoryStack}
         onPressToLicense={onPressToLicense}
      />
   );
}
