import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../../../src/commons/lib/colors";
import NavigationHeaderLeft from "../../../src/components/commons/navigationHeader/headerLeft";
import MyPage from "../../../src/components/units/mypage/MyPage.container";
import LicenseLaterStack from "../licenseLaterStack";

const Stack = createNativeStackNavigator();

export default function MyPageStack({ navigation }) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: colors.black,
               headerTitle: "마이페이지",
               headerTitleAlign: "center",
               headerTitleStyle: { fontSize: 15 },
               headerStyle: {
                  backgroundColor: "#ffffff",
               },
            }}
         >
            <Stack.Screen
               name="myPage"
               component={MyPage}
               options={() => ({
                  headerShown: true,
                  headerShadowVisible: false,
                  headerLeft: () =>
                     NavigationHeaderLeft(
                        { navigation },
                        "main",
                        "",
                        colors.gray
                     ),
               })}
            />
            <Stack.Screen
               name="licenseLaterStack"
               component={LicenseLaterStack}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
