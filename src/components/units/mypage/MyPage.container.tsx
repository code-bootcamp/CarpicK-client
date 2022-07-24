import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_OWNER } from "./MyPage.queries";
import MyPageUI from "./MyPage.presenter";

export default function MyPage({ navigation }: any) {
   const { data } = useQuery(FETCH_LOGIN_OWNER, {
      fetchPolicy: "network-only",
   });

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
