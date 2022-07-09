import RentProcess2PageUI from "./RentProcess2.presenter";

export default function RentProcess2Page({ navigation }) {
   const onPressNext = () => {
      navigation.navigate("rentProcess2");
   };

   return <RentProcess2PageUI onPressNext={onPressNext} />;
}
