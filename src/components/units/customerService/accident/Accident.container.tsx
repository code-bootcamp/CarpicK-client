import AccidentUI from "./Accident.presenter";

export default function AccidentPage({ navigation }) {
   const onPressToInsurance = () => {
      navigation.navigate("insurance");
   };
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return (
      <AccidentUI
         onPressToInsurance={onPressToInsurance}
         onPress={onPressToCsMain}
      />
   );
}
