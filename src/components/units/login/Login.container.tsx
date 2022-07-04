import LoginPageUI from "./Login.presenter";

export default function LoginPage({ navigation }) {
   const onPressJoin = () => {
      navigation.navigate("joinStack");
   };

   return <LoginPageUI onPressJoin={onPressJoin} />;
}
