import * as R from "react-native";
import * as S from "./Drawer.styles";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import MainPage from "../../../src/components/units/main/Main.container";
import HamburgerImage from "../../../assets/main/hamburger.svg";
import MapPage from "../../../src/components/units/map/Map.container";
import { Platform } from "react-native";
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
import CarPickKeyPage from "../../../src/components/units/carPickKey/CarPickKey.container";
import PopularCarPage from "../../../src/components/units/popularCar/PopularCar.container";
import OperationStatusPage from "../../../src/components/units/operationStatus/OperationStatus.container";

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

const Hambergur = (onPress) => {
   return (
      <S.HamburgerTouch onPress={() => onPress(DrawerActions.openDrawer())}>
         <S.HamburgerImageWrapper>
            <R.View>
               <HamburgerImage />
            </R.View>
         </S.HamburgerImageWrapper>
      </S.HamburgerTouch>
   );
};
const BackArrow = (navigation) => {
   return (
      <R.View style={{ paddingLeft: 15 }}>
         <Ionicons
            name={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
            size={Platform.OS === "ios" ? 35 : 24}
            color="#ffffff"
            style={{
               fontSize: 32,
               width: 25,
            }}
            onPress={() => navigation.goBack()}
         />
      </R.View>
   );
};

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
      navigation.navigate("updateUserInfoStack");
   };

   const CustomDrawerContent = (props) => {
      return (
         <R.View style={{ flex: 1 }}>
            <S.DrawerHeader>
               <S.DrawerHeader>
                  <S.DrawerContents>
                     <S.UserImage>
                        <FontAwesome5
                           name="user-circle"
                           size={50}
                           color={colors.theme}
                        />
                     </S.UserImage>
                     <S.UserInfoWrapper>
                        <TitleText>{data?.fetchLoginUser.name}</TitleText>
                        <S.UpdateUserInfoTouch
                           activeOpacity={0.7}
                           onPress={onPressToUpdateUserInfo}
                        >
                           <S.UpdateUserInfoTextHitBox>
                              <Contents1Text color="#a5a5a5">
                                 내 정보 수정하기
                              </Contents1Text>
                           </S.UpdateUserInfoTextHitBox>
                        </S.UpdateUserInfoTouch>
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
               drawerStyle: {
                  backgroundColor: "#ffffff",
                  width: 250,
               },
               headerLeft: () => null,
               headerRight: () => Hambergur(navigation.dispatch),
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
               }}
            />
            <Drawer.Screen
               name="registrationStack"
               component={RegistrationStack}
               options={{
                  title: "My Car 등록하기",
                  headerShown: false,
               }}
            />
            <Drawer.Screen
               name="carpicKey"
               component={CarPickKeyPage}
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
                  title: "Carpick 시작하기",
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
                  headerShown: true,
                  headerTitleStyle: { fontSize: 20, fontWeight: "500" },
                  headerLeft: () => BackArrow(navigation),
               }}
            />
         </Drawer.Navigator>
      </>
   );
}
