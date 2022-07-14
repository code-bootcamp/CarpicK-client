import CarPickKeyUsingUI from "./CarPickKey.using.presenter";

export default function CarPickKeyUsing({ navigation }) {
   const onPressToMain = () => {
      // navigation.navigate("main");
      navigation.goBack();
   };

   const onPressUnlock = () => {
      console.log("문열림");
   };

   const onPressLock = () => {
      console.log("문잠김");
   };

   const onPressReturn = () => {
      navigation.navigate("carPickKeyAfter");
   };

   return (
      <CarPickKeyUsingUI
         onPressToMain={onPressToMain}
         onPressUnlock={onPressUnlock}
         onPressLock={onPressLock}
         onPressReturn={onPressReturn}
      />
   );
}
