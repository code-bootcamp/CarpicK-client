import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import CarInfoPage from "../../../src/components/units/registration/carInfo/CarInfo.container";
import CarPhotosPage from "../../../src/components/units/registration/carPhotos/CarPhotos.container";
import CarRegistrationPage from "../../../src/components/units/registration/carRegistration/CarRegistration.container";

const Stack = createNativeStackNavigator();

export default function RegistrationStack({ navigation }) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerShadowVisible: false,
               headerTintColor: colors.theme,
               headerStyle: { backgroundColor: "#fff" },
               headerTitle: "",
               animation: "slide_from_right",
            }}
         >
            <Stack.Screen
               name="carInfo"
               component={CarInfoPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", colors.gray),
               })}
            />
            <Stack.Screen
               name="carPhotos"
               component={CarPhotosPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "carInfo",
                        "",
                        "#000"
                     ),
               })}
            />
            <Stack.Screen
               name="carRegistration"
               component={CarRegistrationPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "carPhotos",
                        "",
                        "#000"
                     ),
               })}
            />
         </Stack.Navigator>
      </>
   );
}
