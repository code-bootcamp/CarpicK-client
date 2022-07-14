import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRecoilState } from "recoil";
import colors from "../../src/commons/lib/colors";
import { accessTokenState } from "../../src/commons/store";
import NavigationHeaderLeft from "../../src/components/commons/navigationHeader/headerLeft";
import FilterPage from "../../src/components/units/map/filter/Filter.cotnainer";
import CustomerServiceStack from "../screens/customerService";
import IntroStack from "../screens/intro";
import MainStack from "../screens/main";
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

   return (
      <NavigationContainer theme={MyTheme}>
         <Stack.Navigator
            screenOptions={{
               headerShadowVisible: false,
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
                     name="filter"
                     component={FilterPage}
                     options={() => ({
                        headerShown: true,
                        headerShadowVisible: false,
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
