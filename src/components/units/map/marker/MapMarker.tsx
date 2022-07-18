import { useEffect, useState } from "react";
import * as S from "./MapMarker.styles";
import * as R from "react-native";
import { Marker } from "react-native-maps";
import TitleText from "../../../commons/text/TitleText";

export default function MapMarker({
   carLocationId,
   lat,
   lng,
   isDrawerOpen,
   onToggle,
   func,
   setCarLocationId,
}) {
   // const { coordinates, title, description, showDetails } = point;
   // useEffect(() => {
   //    setCarLocationId(carLocationId);
   // }, []);

   return (
      <Marker
         nativeID={"test"}
         onPress={func}
         coordinate={{
            latitude: lat,
            longitude: lng,
         }}
         style={{ width: 80, height: 80 }}
         // image={require(".././../../../../assets/map/marker-150.png")}
         title="카픽존"
      >
         <R.Image
            source={require("../../../../../assets/map/marker-150.png")}
            style={{ width: 80, height: 80 }}
            resizeMode="contain"
            resizeMethod="resize"
         />
      </Marker>
   );
}

{
   /* <R.Image
               style={{ width: 30, height: 30 }}
               source={require("../../../../assets/map/marker.png")}
            />
         </Marker> */
}
