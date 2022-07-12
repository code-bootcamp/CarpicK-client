import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import RentHistoryNonePage from "../../../src/components/units/rentHistory/RentHistoryNone.container";

const Stack = createNativeStackNavigator();

export default function RentHistoryStack({ navigation }) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "#5D8BFF",
               headerTitle: "",
               headerStyle: { backgroundColor: "#ffffff" },
            }}
         >
            <Stack.Screen
               name="rentHistoryNone"
               component={RentHistoryNonePage}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: false,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "main",
                        "",
                        "#000000"
                     ),
               })}
            />
         </Stack.Navigator>
      </>
   );
}
