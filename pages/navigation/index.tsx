import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { useRecoilState } from "recoil";
import colors from "../../src/commons/lib/colors";
import { accessTokenState } from "../../src/commons/store";
import FilterPage from "../../src/components/units/map/filter/Filter.container";
import IntroStack from "../screens/intro";
import MainStack from "../screens/main";
import MyPageStack from "../screens/mypage";
import RentProcessStack from "../screens/rentProcess";
import UpdateUserInfoStack from "../screens/updateUserInfo";

const Stack = createNativeStackNavigator();

const MyTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      background: "#F7F8F9",
   },
};

export default function Navigation() {
   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
   const [selectedCar, setSelectedCar] = useState<string[]>([]);

   return (
      <NavigationContainer theme={MyTheme}>
         <Stack.Navigator
            screenOptions={{
               headerShadowVisible: true,
               headerStyle: { backgroundColor: "#fff" },
               headerTitleAlign: "center",
               headerTitleStyle: {
                  color: colors.black,
                  fontSize: 15,
                  fontWeight: "500",
               },
               animation: "slide_from_right",
            }}
         >
            {!accessToken ? (
               <Stack.Screen
                  name="introStack"
                  component={IntroStack}
                  options={() => ({
                     headerShown: false,
                  })}
               />
            ) : (
               <>
                  <Stack.Screen
                     name="mainStack"
                     component={MainStack}
                     options={() => ({
                        headerShown: false,
                     })}
                  />
                  <Stack.Screen
                     name="myPageStack"
                     component={MyPageStack}
                     options={() => ({
                        headerShown: false,
                     })}
                  />
                  <Stack.Screen
                     name="filter"
                     component={FilterPage}
                     initialParams={{
                        selectedCar,
                        setSelectedCar,
                     }}
                     options={() => ({
                        headerShown: false,
                        headerShadowVisible: true,
                        headerTitle: "차종필터",
                     })}
                  />
                  <Stack.Screen
                     name="updateUserInfoStack"
                     component={UpdateUserInfoStack}
                     options={() => ({
                        headerShown: false,
                     })}
                  />
                  <Stack.Screen
                     name="rentProcessStack"
                     component={RentProcessStack}
                     options={() => ({
                        headerShown: false,
                     })}
                  />
               </>
            )}
         </Stack.Navigator>
      </NavigationContainer>
   );
}
