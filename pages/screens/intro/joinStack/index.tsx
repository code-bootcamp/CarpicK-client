import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../../src/components/commons/navigationHeader/headerLeft";
import JoinPage from "../../../../src/components/units/join/Join.container";
import License1Page from "../../../../src/components/units/license/license1/License1.container";
import License2Page from "../../../../src/components/units/license/license2/License2.container";
import License3Page from "../../../../src/components/units/license/license3/License3.container";

const Stack = createNativeStackNavigator();

export default function JoinStack({ navigation }) {
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
               name="join"
               component={JoinPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#ffffff"),
               })}
            />
            <Stack.Screen
               name="license1"
               component={License1Page}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "join",
                        "회원가입",
                        "#ffffff"
                     ),
               })}
            />
            <Stack.Screen
               name="license2"
               component={License2Page}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="license3"
               component={License3Page}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
