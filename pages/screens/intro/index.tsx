import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import FindIdPage from "../../../src/components/units/findId/FindId.container";
import IdResultPage from "../../../src/components/units/findId/idResult/IdResult.container";
import IntroPage from "../../../src/components/units/intro/Intro.container";
import LoginPage from "../../../src/components/units/login/Login.container";
import PasswordResetStack from "../passwordReset";
import JoinStack from "./joinStack";

const Stack = createNativeStackNavigator();

export default function IntroStack({ navigation }: any) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "#ffffff",
               headerTitle: "",
               headerStyle: { backgroundColor: "#5D8BFF" },
            }}
         >
            <Stack.Screen
               name="intro"
               component={IntroPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="login"
               component={LoginPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="findId"
               component={FindIdPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#ffffff"),
               })}
            />
            <Stack.Screen
               name="idResult"
               component={IdResultPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "login",
                        "",
                        "#ffffff"
                     ),
                  animation: "slide_from_right",
               })}
            />
            <Stack.Screen
               name="passwordReset"
               component={PasswordResetStack}
               options={() => ({
                  headerShown: false,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#ffffff"),
               })}
            />
            <Stack.Screen
               name="joinStack"
               component={JoinStack}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
