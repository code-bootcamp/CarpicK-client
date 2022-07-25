import PaymentResultPageUI from "./PaymentResult.presenter";

export default function PaymentResultPage({ navigation, route }: any) {
   const onPressHome = () => {
      navigation.navigate("main");
   };

   return <PaymentResultPageUI onPressHome={onPressHome} />;
}
