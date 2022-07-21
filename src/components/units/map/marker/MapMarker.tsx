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

   const onPress = () => {
      setIsSelected(true);
      func();
   };

   return (
      <Marker
         nativeID={"test"}
         onPress={onPress}
         coordinate={{
            latitude: lat,
            longitude: lng,
         }}
         title="대여하기"
      >
         <R.Image
            source={
               isSelected
                  ? require("../../../../../assets/map/marker-on.png")
                  : require("../../../../../assets/map/marker.png")
            }
            style={{ width: 70, height: 70 }}
            resizeMode="contain"
            resizeMethod="resize"
         />
      </Marker>
   );
}
