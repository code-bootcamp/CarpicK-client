import PaymentResultPageUI from "./PaymentResult.presenter";

export default function PaymentResultPage({ navigation, route }) {
   const onPressHome = () => {
      navigation.navigate("main");
   };
   console.log(route.params);

   return <PaymentResultPageUI onPressHome={onPressHome} />;
}
