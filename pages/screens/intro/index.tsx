import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Join from "./join";
import Login from "./login";

const Stack = createNativeStackNavigator();

export default function Intro() {
   <>
      <Stack.Navigator>
         <Stack.Screen
            name="intro"
            component={Intro}
            options={() => ({
               headerShown: false,
            })}
         />
         <Stack.Screen
            name="login"
            component={Login}
            options={() => ({
               headerShown: false,
            })}
         />
         <Stack.Screen
            name="join"
            component={Join}
            options={() => ({
               headerShown: false,
            })}
         />
      </Stack.Navigator>
   </>;
}
