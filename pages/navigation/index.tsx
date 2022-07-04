import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroPage from "../../src/components/units/intro/Intro.container";
import Intro from "../screens/intro";

const Stack = createNativeStackNavigator();

const MyTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      background: "#F7F8F9",
   },
};

export default function Navigation() {
   return (
      <NavigationContainer theme={MyTheme}>
         <Stack.Navigator>
            <Stack.Screen
               name="intro"
               component={IntroPage}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
