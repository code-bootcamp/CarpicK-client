import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import PasswordResetPage1 from "../../../src/components/units/passwordReset/passwordReset1/PasswordReset1.container";
import PasswordResetPage2 from "../../../src/components/units/passwordReset/passwordReset2/PasswordReset2.container";

const Stack = createNativeStackNavigator();

export default function PasswordResetStack({ navigation }) {
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
               name="passwordReset1"
               component={PasswordResetPage1}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: false,
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
               name="passwordReset2"
               component={PasswordResetPage2}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: false,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "",
                        "비밀번호 재설정",
                        "#ffffff"
                     ),
               })}
            />
         </Stack.Navigator>
      </>
   );
}
