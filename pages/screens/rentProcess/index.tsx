import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import Payment from "../../../src/components/units/iamport/iamport";
import PaymentResultPage from "../../../src/components/units/rentProcess/paymentResult/paymentResult.container";
import RentProcess1Page from "../../../src/components/units/rentProcess/rentProcess1/RentProcess1.container";
import RentProcess2Page from "../../../src/components/units/rentProcess/rentProcess2/RentProcess2.container";

const Stack = createNativeStackNavigator();

export default function RentProcessStack({ navigation }) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTitle: "",
               headerTitleStyle: {
                  color: colors.black,
                  fontSize: 15,
                  fontWeight: "500",
               },
            }}
         >
            <Stack.Screen
               name="rentProcess1"
               component={RentProcess1Page}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#000000"),
                  headerTitle: "대여 정보 확인",
                  headerTitleAlign: "center",
               })}
            />
            <Stack.Screen
               name="rentProcess2"
               component={RentProcess2Page}
               options={() => ({
                  headerShown: true,
                  headerLeft: () =>
                     NavigationHeaderLeft({ navigation }, "", "", "#000000"),
                  headerTitle: "결제 정보 확인",
                  headerTitleAlign: "center",
               })}
            />
            <Stack.Screen
               name="payment"
               component={Payment}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="paymentResult"
               component={PaymentResultPage}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
