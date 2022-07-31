import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import NavigationHeaderRight from "../../../src/components/commons/navigationHeader/headerLeftRight";
import AccidentPage from "../../../src/components/units/customerService/accident/Accident.container";
import InsurancePage from "../../../src/components/units/customerService/insurance/Insurance.container";
import MainPage from "../../../src/components/units/customerService/main/Main.container";
import ReservePage from "../../../src/components/units/customerService/reserve/Reserve.container";
import ReturnPage from "../../../src/components/units/customerService/return/Return.container";
import UserGuidePage from "../../../src/components/units/customerService/userGuide/UserGuide.container";

const Stack = createNativeStackNavigator();

export default function CustomerServiceStack({ navigation }: any) {
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
               name="csMain"
               component={MainPage}
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
                  headerRight: () => NavigationHeaderRight(),
               })}
            />
            <Stack.Screen
               name="userGuide"
               component={UserGuidePage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="accident"
               component={AccidentPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="insurance"
               component={InsurancePage}
               options={() => ({
                  headerShown: false,
                  animation: "slide_from_right",
               })}
            />
            <Stack.Screen
               name="reserve"
               component={ReservePage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="return"
               component={ReturnPage}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
