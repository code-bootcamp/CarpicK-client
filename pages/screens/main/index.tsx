import * as R from "react-native";
import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import MainPage from "../../../src/components/units/main/Main.container";
import HamburgerImage from "../../../assets/main/hamburger.svg";
import MapPage from "../../../src/components/units/map/Map.container";
import { Platform } from "react-native";
import CustomerServiceStack from "../customerService";
import { useMutation } from "@apollo/client";
import { gql } from "apollo-boost";
import Modal1 from "../../../src/components/commons/modals/modal1/Modal1";
import { useState } from "react";
const LOGOUT = gql`
   mutation logout {
      logout
   }
`;

const Drawer = createDrawerNavigator();

const Hambergur = (onPress) => {
   return (
      <R.TouchableOpacity
         onPress={() => onPress(DrawerActions.openDrawer())}
         style={{
            width: 80,
            height: 30,
            marginRight: 20,
            alignItems: "flex-end",
            justifyContent: "center",
         }}
      >
         <R.View
            style={{
               width: 65,
               height: 30,
               justifyContent: "center",
               alignItems: "flex-end",
            }}
         >
            <R.View>
               <HamburgerImage />
            </R.View>
         </R.View>
      </R.TouchableOpacity>
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
   const [openModal, setOpenModal] = useState(false);

   const modalNegativeLogOut = async () => {
      const result = await logout();
      console.log("this is result", result);
   };

   const CustomDrawerContent = (props) => {
      return (
         <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="로그아웃" onPress={() => setOpenModal(true)} />
         </DrawerContentScrollView>
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
                  headerTitleStyle: { fontSize: 20, fontWeight: "300" },
                  headerLeft: () => BackArrow(navigation),
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
               name="licenseLater"
               component={CustomerServiceStack}
               options={{
                  title: "면허등록",
                  headerShown: false,
               }}
            />
         </Drawer.Navigator>
      </>
   );
}
