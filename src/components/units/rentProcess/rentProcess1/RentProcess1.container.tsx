import RentProcess1PageUI from "./RentProcess1.presenter";

export default function RentProcess1Page({ navigation }) {
   const onPressNext = () => {
      navigation.navigate("rentProcess2");
   };

   return <RentProcess1PageUI onPressNext={onPressNext} />;
}
