import * as R from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TitleText from "../../../src/components/commons/text/TitleText";
import MainPage from "../../../src/components/units/main/Main.container";
import HamburgerImage from "../../../assets/main/hamburger.svg";
const Stack = createNativeStackNavigator();

export default function MainStack({ navigation }) {
   return (
      <>
         <Stack.Navigator
            screenOptions={{
               headerTintColor: "#ffffff",
               headerTitle: "",
               headerStyle: { backgroundColor: "#5D8BFF" },
            }}
         >
            <Stack.Screen
               name="main"
               component={MainPage}
               options={() => ({
                  headerShown: true,
                  headerLeft: () => LogoLeft(),
                  headerRight: () => Hambergur(),
               })}
            />
         </Stack.Navigator>
      </>
   );
}

const LogoLeft = () => {
   return (
      <R.View style={{ marginLeft: 5 }}>
         <TitleText color="#ffffff">CarpicK</TitleText>
      </R.View>
   );
};

const Hambergur = () => {
   return (
      <R.TouchableOpacity
         style={{
            width: 80,
            height: 30,
            marginRight: 5,
            alignItems: "flex-end",
            justifyContent: "center",
         }}
      >
         <R.View>
            <HamburgerImage />
         </R.View>
      </R.TouchableOpacity>
   );
};
