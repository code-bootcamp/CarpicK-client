import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../../src/components/commons/navigationHeader/headerLeft";
import TermsWebView from "../../../../src/components/commons/termsWebView/TermsWebView";
import JoinPage from "../../../../src/components/units/join/Join.container";
import License1Page from "../../../../src/components/units/license/license1/License1.container";
import License2Page from "../../../../src/components/units/license/license2/License2.container";
import License3Page from "../../../../src/components/units/license/license3/License3.container";
import TermsPage from "../../../../src/components/units/terms/Terms.container";

const Stack = createNativeStackNavigator();

export default function JoinStack({ navigation }: any) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "black",
               headerTitle: "",
               headerStyle: { backgroundColor: "white" },
               headerShadowVisible: false,
               animation: "slide_from_right",
            }}
         >
            <Stack.Screen
               name="terms"
               component={TermsPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", colors.gray),
               })}
            />
            <Stack.Screen
               name="termsWebView"
               component={TermsWebView}
               options={() => ({
                  headerShown: true,
                  animation: "fade_from_bottom",
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "terms", "", "black"),
               })}
            />
            <Stack.Screen
               name="join"
               component={JoinPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "terms",
                        "",
                        colors.gray
                     ),
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
                        "",
                        colors.gray
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
