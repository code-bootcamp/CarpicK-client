import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarPhotosUI from "./CarPhotos.presenter";

export default function CarPhotosPage({ navigation, route }) {
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", "", ""]);

   const onPressNext = async () => {
      navigation.navigate("carRegistration", {
         carInfo: { ...route.params.carInfo },
         carUrl: imageFiles,
      });
   };

   return (
      <CarPhotosUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         imageUris={imageUris}
         setImageUris={setImageUris}
         onPressNext={onPressNext}
      />
   );
}
