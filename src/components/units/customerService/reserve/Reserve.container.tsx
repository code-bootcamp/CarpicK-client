import ReserveUI from "./Reserve.presenter";

export default function ReservePage({ navigation }: any) {
   const onPressToCsMain = () => {
      navigation.navigate("csMain");
   };
   return <ReserveUI onPress={onPressToCsMain} />;
}
