import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarPickKeyAfterUI from "./CarPickKey.after.presenter";

export default function CarPickKeyAfter({ navigation }) {
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);
   const [rating, setRating] = useState(0);
   const [isModalVisible, setIsModalVisible] = useState(false);

   const onChangeModalVisible = () => {
      setIsModalVisible((prev) => !prev);
   };

   const onChangeRating = (rating: number) => {
      setRating(rating);
   };

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
         rating={rating}
         onChangeRating={onChangeRating}
         isModalVisible={isModalVisible}
         onChangeModalVisible={onChangeModalVisible}
         onPressReturn={onPressReturn}
      />
   );
}
