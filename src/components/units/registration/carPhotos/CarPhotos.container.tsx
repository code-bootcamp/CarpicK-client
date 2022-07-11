import { useState } from "react";
import CarPhotosUI from "./CarPhotos.presenter";

export default function CarPhotosPage({ navigation }) {
   const [imageFiles, setImageFiles] = useState<string[]>(["", "", ""]);

   const onPressNext = () => {
      navigation.navigate("carRegistration");
   };

   return (
      <CarPhotosUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         onPressNext={onPressNext}
      />
   );
}
