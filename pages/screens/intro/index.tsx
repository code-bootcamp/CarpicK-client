import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroPage from "../../../src/components/units/intro/Intro.container";
import LoginPage from "../../../src/components/units/login/Login.container";
import Join from "./join";

const Stack = createNativeStackNavigator();

export default function IntroStack() {
   return (
      <>
         <Stack.Navigator>
            <Stack.Screen
               name="intro"
               component={IntroPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="login"
               component={LoginPage}
               options={() => ({
                  headerShown: false,
               })}
            />
            <Stack.Screen
               name="joinStack"
               component={Join}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </>
   );
}
