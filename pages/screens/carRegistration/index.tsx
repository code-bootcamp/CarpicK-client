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
               headerTintColor: colors.theme,
               headerStyle: { backgroundColor: "#fff" },
               headerTitle: "마이카 등록하기",
               headerTitleAlign: "center",
               headerTitleStyle: {
                  color: colors.black,
                  fontSize: 15,
                  fontWeight: "500",
               },
               animation: "slide_from_right",
               headerLeft: () =>
                  NavigationHeaderLeft({ navigation }, "", "", colors.black),
            }}
         >
            <Stack.Screen name="carInfo" component={CarInfoPage} />
            <Stack.Screen name="carPhotos" component={CarPhotosPage} />
            <Stack.Screen
               name="carRegistration"
               component={CarRegistrationPage}
            />
         </Stack.Navigator>
      </>
   );
}
