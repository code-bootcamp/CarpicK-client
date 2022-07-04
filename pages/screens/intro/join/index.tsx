import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../../src/components/commons/navigationHeader";
import JoinPage from "../../../../src/components/units/join/Join.conainer";

const Stack = createNativeStackNavigator();

export default function Join({ navigation }) {
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
               name="join"
               component={JoinPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () => NavigationHeaderLeft({ navigation }),
               })}
            />
            {/* <Stack.Screen
            name="license1"
            component={LicensePage1}
            options={() => ({
               headerShown: true,
            })}
         />
         <Stack.Screen
            name="license2"
            component={LicensePage2}
            options={() => ({
               headerShown: false,
            })}
         />
         <Stack.Screen
            name="license3"
            component={LicensePage3}
            options={() => ({
               headerShown: false,
            })}
         /> */}
         </Stack.Navigator>
      </>
   );
}
