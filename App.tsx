import * as N from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import Navigation from "./pages/navigation";
import SafeViewAndroid from "./src/commons/styles/globalStyle";
import { useCallback, useEffect, useState } from "react";
import { LogBox } from "react-native";
import { RecoilRoot } from "recoil";
import ApolloSetting from "./src/components/commons/apollo";
import "react-native-gesture-handler";

export default function App() {
   const [appIsReady, setAppIsReady] = useState(false);
   LogBox.ignoreLogs(["ViewPropTypes will be removed"]);

   useEffect(() => {
      async function prepare() {
         try {
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync(Entypo.font);
            await Font.loadAsync({
               Regular: require("./assets/fonts/NotoSansKR-Regular.otf"),
               Bold: require("./assets/fonts/NotoSansKR-Bold.otf"),
            });
            await new Promise((resolve) => setTimeout(resolve, 2000));
         } catch (e) {
         } finally {
            setAppIsReady(true);
         }
      }
      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return null;
   }

   return (
      <RecoilRoot>
         <ApolloSetting>
            <N.SafeAreaView
               onLayout={onLayoutRootView}
               style={SafeViewAndroid.AndroidSafeArea}
            >
               <Navigation
                  style={{
                     fontFamily: "Regular,Bold",
                     includeFontPadding: false,
                  }}
               />
            </N.SafeAreaView>
         </ApolloSetting>
      </RecoilRoot>
   );
}
