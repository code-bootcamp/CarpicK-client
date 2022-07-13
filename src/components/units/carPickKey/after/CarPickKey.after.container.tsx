import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarPickKeyAfterUI from "./CarPickKey.after.presenter";

export default function CarPickKeyAfter({ navigation }) {
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);

   const onPressReturn = () => {
      // TODO 사진 전송하고 반납완료
      console.log("반납완료");
      navigation.navigate("main");
   };

   return (
      <CarPickKeyAfterUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         imageUris={imageUris}
         setImageUris={setImageUris}
         onPressReturn={onPressReturn}
      />
   );
}
