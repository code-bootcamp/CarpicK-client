import InsuranceUI from "./Insurance.presenter";

export default function InsurancePage({ navigation }: any) {
   const onPressAccident = () => {
      navigation.navigate("accident");
   };
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return (
      <InsuranceUI
         onPressAccident={onPressAccident}
         onPress={onPressToCsMain}
      />
   );
}
