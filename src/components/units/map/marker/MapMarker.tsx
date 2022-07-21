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
   const [isSelected, setIsSelected] = useState(false);

   return (
      <Marker
         nativeID={"test"}
         onPress={func}
         coordinate={{
            latitude: lat,
            longitude: lng,
         }}
         style={{ width: 80, height: 80 }}
         title="카픽존"
         onSelect={() => setIsSelected(true)}
         onDeselect={() => setIsSelected(false)}
      >
         <R.Image
            source={
               isSelected
                  ? require("../../../../../assets/map/marker-on.png")
                  : require("../../../../../assets/map/marker.png")
            }
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
