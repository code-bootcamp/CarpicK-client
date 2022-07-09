import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import FindIdPage from "../../../src/components/units/findId/FindId.container";
import IdResultPage from "../../../src/components/units/findId/idResult/IdResult.container";
import IntroPage from "../../../src/components/units/intro/Intro.container";
import LoginPage from "../../../src/components/units/login/Login.container";
import PasswordResetPage from "../../../src/components/units/passwordReset/PasswordReset.container";
import JoinStack from "./joinStack";

const Stack = createNativeStackNavigator();

export default function IntroStack({ navigation }) {
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
                     NavigationHeaderLeft(
                        { navigation },
                        "",
                        "아이디 찾기",
                        "#ffffff"
                     ),
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
                        "아이디 찾기",
                        "#ffffff"
                     ),
               })}
            />
            <Stack.Screen
               name="passwordReset"
               component={PasswordResetPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "",
                        "비밀번호 재설정",
                        "#ffffff"
                     ),
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
