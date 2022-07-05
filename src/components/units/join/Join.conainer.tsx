import JoinPageUI from "./Join.presenter";

export default function JoinPage({ navigation }) {
   // const onPressLogin = () => {
   //    navigation.navigate("login");
   // };

   const onPressNext = () => {
      navigation.navigate("license1");
   };

   return <JoinPageUI onPressNext={onPressNext} />;
}
