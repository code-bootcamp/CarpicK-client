import CarPickKeyBeforeUI from "./CarPickKey.before.presenter";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { START_CAR, UPLOAD_FILE } from "./CarPickKey.before.queries";

export default function CarPickKeyBefore({ navigation, route }) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [startCar] = useMutation(START_CAR);

   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);

   const onPressToCarPickKey = async () => {
      // TODO 사진 전송하고 카픽키 사용 페이지 이동
      console.log("ImageFiles: ", imageFiles);
      console.log("CarId: ", route.params.carId);
      console.log("ReservationId: ", route.params.reservationId);

      try {
         const carUrl = await uploadFile({
            variables: {
               files: imageFiles,
            },
         });

         await startCar({
            variables: {
               startCarInput: {
                  urls: carUrl.data.uploadFile,
                  carId: route.params.carId,
                  reservationId: route.params.reservationId,
               },
            },
         });

         navigation.navigate("carPickKeyUsing");
      } catch (error: any) {
         console.log(error.message);
      }
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
