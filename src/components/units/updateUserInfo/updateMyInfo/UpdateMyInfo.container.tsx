import UpdateMyInfoUI from "./UpdateMyInfo.presenter";

export default function UpdateMyInfoPage({ navigation, route }) {
   console.log("this is params", route.params);

   const onPressToMain = () => {
      navigation.navigate("main");
   };
   return (
      <UpdateMyInfoUI
         onPress={onPressToMain}
         name={route.params.data.name}
         email={route.params.data.email}
      />
   );
}
