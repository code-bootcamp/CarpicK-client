import ReserveUI from "./Reserve.presenter";

export default function ReservePage({ navigation }) {
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return <ReserveUI onPress={onPressToCsMain} />;
}
