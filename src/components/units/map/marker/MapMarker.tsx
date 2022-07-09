import { useState } from "react";
import * as S from "./MapMarker.styles";
import * as R from "react-native";
import { Marker } from "react-native-maps";
import TitleText from "../../../commons/text/TitleText";

export default function MarkerWithDetails({ point, onToggle }) {
   const { coordinates, title, description, showDetails } = point;
   return (
      <>
         <Marker
            onPress={onToggle}
            coordinate={{
               latitude: point.coordinates.lat,
               longitude: point.coordinates.long,
            }}
            image={require(".././../../../../assets/map/marker-150.png")}
            title="this is a marker"
            description="this is a marker example"
         />
         <></>
      </>
   );
}

{
   /* <R.Image
               style={{ width: 30, height: 30 }}
               source={require("../../../../assets/map/marker.png")}
            />
         </Marker> */
}
