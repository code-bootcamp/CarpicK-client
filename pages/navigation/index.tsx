import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomerServiceStack from "../screens/customerService";

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
         {/* <Stack.Navigator>
            <Stack.Screen
               name="introStack"
               component={IntroStack}
               options={() => ({
                  headerShown: false,
               })}
            />
         </Stack.Navigator> */}
         <CustomerServiceStack style={{ fontFamily: "Regular,Bold" }} />
      </NavigationContainer>
   );
}
