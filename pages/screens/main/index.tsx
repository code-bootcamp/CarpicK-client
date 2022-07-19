import * as R from "react-native";
import * as S from "./Drawer.styles";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import MainPage from "../../../src/components/units/main/Main.container";
import MapPage from "../../../src/components/units/map/Map.container";
import CustomerServiceStack from "../customerService";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "apollo-boost";
import Modal1 from "../../../src/components/commons/modals/modal1/Modal1";
import { useState } from "react";
import RentHistoryStack from "../rentHistory";
import TitleText from "../../../src/components/commons/text/TitleText";
import Contents1Text from "../../../src/components/commons/text/Contents1Text";
import colors from "../../../src/commons/lib/colors";
import RegistrationStack from "../carRegistration";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";
import LicenseLaterStack from "../licenseLaterStack";
import UserGuidePage from "../../../src/components/units/customerService/userGuide/UserGuide.container";
import PopularCarPage from "../../../src/components/units/popularCar/PopularCar.container";
import OperationStatusPage from "../../../src/components/units/operationStatus/OperationStatus.container";
import { BackArrow } from "../../../src/components/commons/navigationHeader/icon/BackArrow";
import { Hamburger } from "../../../src/components/commons/navigationHeader/icon/Hamburger";
import CarPickKeyStack from "../carPickKey";
import { Filter } from "../../../src/components/commons/navigationHeader/icon/Filter";
import ProfileImg from "../../../assets/mypage/ic_profile.svg";

const LOGOUT = gql`
   mutation logout {
      logout
   }
`;

const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         id
         name
         email
         phone
         isAuth
      }
   }
`;

const Drawer = createDrawerNavigator();

export default function MainStack({ navigation }) {
   const [logout] = useMutation(LOGOUT);
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
   const [openModal, setOpenModal] = useState(false);
   const { data } = useQuery(FETCH_LOGIN_USER);
   const modalNegativeLogOut = async () => {
      await AsyncStorage.removeItem("accessToken");
      const result = await logout();
      setAccessToken("");
   };
   const onPressToUpdateUserInfo = () => {
      // navigation.navigate("updateUserInfoStack");
      navigation.navigate("myPageStack");
   };

   const CustomDrawerContent = (props) => {
      return (
         <R.View style={{ flex: 1 }}>
            <S.DrawerHeader>
               <S.DrawerHeader>
                  <S.DrawerContents>
                     <ProfileImg />
                     <S.UserInfoWrapper
                        activeOpacity={0.7}
                        onPress={onPressToUpdateUserInfo}
                     >
                        <TitleText fontSize="16">
                           {data?.fetchLoginUser.name}
                        </TitleText>
                        <Contents1Text fontSize="12" color="#a5a5a5">
                           마이페이지
                        </Contents1Text>
                     </S.UserInfoWrapper>
                  </S.DrawerContents>
               </S.DrawerHeader>
            </S.DrawerHeader>
            <S.DrawerContentWrapper
               style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}
            >
               <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
               </DrawerContentScrollView>
            </S.DrawerContentWrapper>
            <S.LogoutTouch onPress={() => setOpenModal(true)}>
               <MaterialIcons name="logout" size={12} color="#a5a5a5" />
               <Contents1Text color="#a5a5a5">로그아웃</Contents1Text>
            </S.LogoutTouch>
         </R.View>
      );
   };

   return (
      <>
         {openModal && (
            <Modal1
               contents="로그아웃 하시겠습니까?"
               negativeText="취소"
               positiveText="확인"
               positive={() => modalNegativeLogOut()}
               negative={() => setOpenModal(false)}
            />
         )}
         <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            useLegacyImplementation={true}
            initialRouteName="CarpicK"
            screenOptions={{
               drawerPosition: "right",
               drawerType: "front",
               headerShown: true,
               swipeEnabled: true,
               headerShadowVisible: true,
               drawerStyle: {
                  backgroundColor: "#ffffff",
                  width: 250,
               },
               headerLeft: () => null,
               headerRight: () => Hamburger(navigation.dispatch),
               headerTitleAlign: "left",
               headerStyle: {
                  backgroundColor: "#5D8BFF",
               },
               headerTintColor: "#ffffff",
               headerTitleStyle: {
                  fontSize: 25,
                  fontWeight: "bold",
               },
            }}
         >
            <Drawer.Screen
               name="main"
               component={MainPage}
               options={{
                  title: "CarpicK",
                  drawerIcon: ({ focused }) => (
                     <FontAwesome5
                        name="car"
                        size={focused ? 25 : 20}
                        color={focused ? "#0080ff" : "#999999"}
                     />
                  ),
               }}
            />
            <Drawer.Screen
               name="map"
               component={MapPage}
               options={{
                  title: "카픽존",
                  headerTitleStyle: { fontSize: 20, fontWeight: "500" },
                  headerLeft: () => BackArrow(navigation),
                  headerRight: () => Filter(navigation),
               }}
            />
            <Drawer.Screen
               name="registrationStack"
               component={RegistrationStack}
               options={{
                  title: "My Car 등록하기",
                  headerShown: false,
                  headerTitleStyle: { fontSize: 20, fontWeight: "500" },
                  headerLeft: () => BackArrow(navigation),
               }}
            />
            <Drawer.Screen
               name="carpicKeyStack"
               component={CarPickKeyStack}
               options={{
                  title: "CarpicKey",
                  headerShown: false,
               }}
            />
            <Drawer.Screen
               name="popularCar"
               component={PopularCarPage}
               options={{
                  title: "인기차 보러가기",
                  headerTitleStyle: { fontSize: 20, fontWeight: "500" },
                  headerLeft: () => BackArrow(navigation),
               }}
            />
            <Drawer.Screen
               name="userGuide"
               component={UserGuidePage}
               options={{
                  title: "CarpicK 시작하기",
                  headerShown: false,
               }}
            />
            <Drawer.Screen
               name="customerService"
               component={CustomerServiceStack}
               options={{
                  title: "고객센터",
                  headerShown: false,
               }}
            />
            <Drawer.Screen
               name="operationStatus"
               component={OperationStatusPage}
               options={{
                  title: "운행현황",
                  headerShown: true,
                  headerTitleStyle: { fontSize: 20, fontWeight: "500" },
                  headerLeft: () => BackArrow(navigation),
               }}
            />
            <Drawer.Screen
               name="rentHistoryStack"
               component={RentHistoryStack}
               options={{
                  title: "이용내역",
                  headerShown: false,
               }}
            />
            <Drawer.Screen
               name="licenseLater"
               component={LicenseLaterStack}
               options={{
                  title: "면허등록",
                  headerShown: false,
               }}
            />
         </Drawer.Navigator>
      </>
   );
}
