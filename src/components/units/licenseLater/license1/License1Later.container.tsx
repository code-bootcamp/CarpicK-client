import License1LaterPageUI from "./License1Later.presenter";

export default function License1LaterPage({ navigation }) {
   const onPressNext = () => {
      navigation.navigate("license2Later");
   };

   return <License1LaterPageUI onPressNext={onPressNext} />;
}
