import CarPickKeyUI from "./CarPickKey.presenter";

export default function CarPickKeyPage({ navigation }) {
   const onPressBack = () => {
      navigation.goBack();
   };

   const onPressUnlock = () => {
      console.log("문열림");
   };

   const onPressLock = () => {
      console.log("문잠김");
   };

   const onPressReturn = () => {
      console.log("차량 반납");
   };

   return (
      <CarPickKeyUI
         onPressBack={onPressBack}
         onPressUnlock={onPressUnlock}
         onPressLock={onPressLock}
         onPressReturn={onPressReturn}
      />
   );
}
