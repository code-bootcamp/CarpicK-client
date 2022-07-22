import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import LoadingCircle from "../../../commons/loadingCircle/LoadingCircle";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import Modal4 from "../../../commons/modals/modal4/Modal4";
import CarPickKeyAfterUI from "./CarPickKey.after.presenter";
import {
   CREATE_REVIEW,
   END_CAR,
   UPLOAD_FILE,
} from "./CarPickKey.after.queries";

export default function CarPickKeyAfter({ navigation, route }: any) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [endCar] = useMutation(END_CAR);
   const [createReview] = useMutation(CREATE_REVIEW);
   const [isReady, setIsReady] = useState(false);
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);
   const [rating, setRating] = useState(0);
   const [isModalVisible, setIsModalVisible] = useState(false);

   const onChangeRating = (rating: number) => {
      setRating(rating);
   };

   const onPressReturn = async () => {
      try {
         setIsReady(true);
         const carUrl = await uploadFile({
            variables: {
               files: imageFiles,
            },
         });

         await endCar({
            variables: {
               endCarInput: {
                  urls: carUrl.data.uploadFile,
                  carId: route.params.carId,
                  reservationId: route.params.reservationId,
               },
            },
         });

         await createReview({
            variables: {
               carId: route.params.carId,
               rating,
            },
         });

         setIsModalVisible(true);
      } catch (error: any) {
         return (
            <Modal4
               title="반납 처리 에러"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   const onPressToMain = () => {
      navigation.replace("mainStack");
   };

   return (
      <>
         {isReady && <LoadingCircle />}
         {isModalVisible && (
            <Modal3
               contents="반납을 완료했습니다."
               positiveText="확인"
               positive={onPressToMain}
            />
         )}
         <CarPickKeyAfterUI
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            imageUris={imageUris}
            setImageUris={setImageUris}
            rating={rating}
            onChangeRating={onChangeRating}
            isModalVisible={isModalVisible}
            onPressReturn={onPressReturn}
         />
      </>
   );
}
