import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarPickKeyAfterUI from "./CarPickKey.after.presenter";
import {
   CREATE_REVIEW,
   END_CAR,
   UPLOAD_FILE,
} from "./CarPickKey.after.queries";

export default function CarPickKeyAfter({ navigation, route }) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [endCar] = useMutation(END_CAR);
   const [createReview] = useMutation(CREATE_REVIEW);

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

   const onPressReturn = async () => {
      // TODO 사진 전송하고 반납완료
      console.log(imageFiles);
      try {
         const carUrl = await uploadFile({
            variables: {
               files: imageFiles,
            },
         });

         console.log("carUrl: ", carUrl);

         const result = await endCar({
            variables: {
               endCarInput: {
                  urls: carUrl.data.uploadFile,
                  carId: route.params.carId,
                  reservationId: route.params.reservationId,
               },
            },
         });

         console.log("ENDCAR 결과: ", result);

         const result2 = await createReview({
            variables: {
               carId: route.params.carId,
               rating,
            },
         });

         console.log("CREATEREVIEW 결과: ", result2);

         onChangeModalVisible();

         console.log("반납완료");
         navigation.navigate("main");
      } catch (error: any) {
         console.log(error.message);
      }
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
