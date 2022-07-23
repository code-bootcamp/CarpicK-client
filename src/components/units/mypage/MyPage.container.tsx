import { useQuery } from "@apollo/client";
import MyPageUI from "./MyPage.presenter";
import { FETCH_LOGIN_OWNER } from "./MyPage.queries";

export default function MyPage({ navigation }) {
   const { data } = useQuery(FETCH_LOGIN_OWNER, {
      fetchPolicy: "network-only",
   });
   console.log("this is owner data", data);

   const onPressUpdateInfo = () => {
      navigation.navigate("updateUserInfoStack");
   };

   const onPressMakeLicense = () => {
      navigation.navigate("licenseLaterStack");
   };

   return (
      <MyPageUI
         data={data}
         onPressUpdateInfo={onPressUpdateInfo}
         onPressMakeLicense={onPressMakeLicense}
      />
   );
}
