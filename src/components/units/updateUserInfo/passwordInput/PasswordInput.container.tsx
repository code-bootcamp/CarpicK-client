import Navigation from "../../../../../pages/navigation";
import PasswordInputUI from "./PasswordInput.presenter";

export default function PasswordInputPage({ navigation }) {
   const onPressToUpdateMyInfo = () => {
      navigation.navigate("updateMyInfoPage");
   };
   return <PasswordInputUI onPressToUpdateMyInfo={onPressToUpdateMyInfo} />;
}
