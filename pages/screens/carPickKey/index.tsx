import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import CarPickKeyAfter from "../../../src/components/units/carPickKey/after/CarPickKey.after.container";
import CarPickKeyBefore from "../../../src/components/units/carPickKey/before/CarPickKey.before.container";
import CarPickKeyUsing from "../../../src/components/units/carPickKey/using/CarPickKey.using.container";

const Stack = createNativeStackNavigator();

export default function CarPickKeyStack({ navigation }) {
   return (
      <>
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
            }}
         >
            <Stack.Screen
               name="carPickKeyBefore"
               component={CarPickKeyBefore}
               options={() => ({
                  headerShown: true,
                  headerTitle: "차량 인수하기",
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#000"),
               })}
            />
            <Stack.Screen
               name="carPickKeyUsing"
               component={CarPickKeyUsing}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="carPickKeyAfter"
               component={CarPickKeyAfter}
               options={() => ({
                  headerShown: true,
                  headerTitle: "차량 반납하기",
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#000"),
               })}
            />
         </Stack.Navigator>
      </>
   );
}
