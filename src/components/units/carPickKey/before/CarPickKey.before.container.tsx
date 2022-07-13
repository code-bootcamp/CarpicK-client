import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarPickKeyBeforeUI from "./CarPickKey.before.presenter";
import ImagePicker from "expo-image-picker";

export default function CarPickKeyBefore({ navigation }) {
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);

   const onPressToCarPickKey = async () => {
      // TODO 사진 전송하고 카픽키 사용 페이지 이동
      navigation.navigate("carPickKeyUsing");
   };

   return (
      <CarPickKeyBeforeUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         imageUris={imageUris}
         setImageUris={setImageUris}
         onPressToCarPickKey={onPressToCarPickKey}
      />
   );
}
