import License1PageUI from "./License1.presenter";

export default function License1Page({ navigation }) {
   const onPressNext = () => {
      navigation.navigate("license2");
   };

   return <License1PageUI onPressNext={onPressNext} />;
}
