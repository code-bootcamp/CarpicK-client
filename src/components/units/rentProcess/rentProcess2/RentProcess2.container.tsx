import RentProcess2PageUI from "./RentProcess2.presenter";

export default function RentProcess2Page({ navigation }) {
   const onPressToPayment = () => {
      navigation.navigate("payment");
   };

   return <RentProcess2PageUI onPressToPayment={onPressToPayment} />;
}
