import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import License1LaterPage from "../../../src/components/units/licenseLater/license1/License1Later.container";
import License2LaterPage from "../../../src/components/units/licenseLater/license2/License2Later.container";
import License3LaterPage from "../../../src/components/units/licenseLater/license3/License3Later.container";

const Stack = createNativeStackNavigator();

export default function LicenseLaterStack({ navigation }) {
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
               name="license1Later"
               component={License1LaterPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="license2Later"
               component={License2LaterPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="license3Later"
               component={License3LaterPage}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
