import { useQuery } from "@apollo/client";
import MyPageUI from "./MyPage.presenter";
import { FETCH_LOGIN_OWNER } from "./MyPage.queries";

export default function MyPage({ navigation }) {
   const { data } = useQuery(FETCH_LOGIN_OWNER);
   console.log(data?.fetchLoginOwner.car.imageCar[0].url);
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
