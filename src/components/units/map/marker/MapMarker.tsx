import { useState } from "react";
import * as R from "react-native";
import { Marker } from "react-native-maps";

export default function MapMarker({ lat, lng, func }) {
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
