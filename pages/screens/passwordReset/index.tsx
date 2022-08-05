import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import PasswordResetPage1 from "../../../src/components/units/passwordReset/passwordReset1/PasswordReset1.container";
import PasswordResetPage2 from "../../../src/components/units/passwordReset/passwordReset2/PasswordReset2.container";
import PasswordResetPage3 from "../../../src/components/units/passwordReset/passwordReset3/PasswordReset3.container";

const Stack = createNativeStackNavigator();

export default function PasswordResetStack({ navigation }: any) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "#ffffff",
               headerTitle: "",
               headerStyle: { backgroundColor: "#5D8BFF" },
               animation: "slide_from_right",
            }}
         >
            <Stack.Screen
               name="passwordReset1"
               component={PasswordResetPage1}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#ffffff"),
               })}
            />
            <Stack.Screen
               name="passwordReset2"
               component={PasswordResetPage2}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "passwordReset1",
                        "",
                        "#ffffff"
                     ),
               })}
            />
            <Stack.Screen
               name="passwordReset3"
               component={PasswordResetPage3}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "passwordReset2",
                        "",
                        "#ffffff"
                     ),
               })}
            />
         </Stack.Navigator>
      </>
   );
}
