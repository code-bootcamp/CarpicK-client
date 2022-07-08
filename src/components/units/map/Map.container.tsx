import MapPageUI from "./Map.presenter";
import * as Location from "expo-location";
import * as R from "react-native";
import { useEffect, useState } from "react";

export default function MapPage({ navigation }) {
   const [location, setLocation] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.004,
      longitudeDelta: 0.009,
   });
   const [isReady, setIsReady] = useState();
   const [errorMsg, setErrorMsg] = useState("");
   const [mapWidth, setMapWidth] = useState("99%");

   const updateMapStyle = () => {
      setMapWidth("100%");
   };

   useEffect(() => {
      (async () => {
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== "granted") {
            setErrorMsg("카픽존을 이용하려면 위치 권한승인이 필요합니다!");
            return;
         }

         let location = await Location.getCurrentPositionAsync({});
         setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.009,
         });
      })();
   }, []);

   // console.log("this is coord", location);
   return <MapPageUI updateMapStyle={updateMapStyle} location={location} />;
}
