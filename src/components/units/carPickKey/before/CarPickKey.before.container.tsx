import CarPickKeyBeforeUI from "./CarPickKey.before.presenter";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { START_CAR, UPLOAD_FILE } from "./CarPickKey.before.queries";
import LoadingCircle from "../../../commons/loadingCircle/LoadingCircle";
import Modal4 from "../../../commons/modals/modal4/Modal4";

export default function CarPickKeyBefore({ navigation, route }: any) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [startCar] = useMutation(START_CAR);
   const [isReady, setIsReady] = useState(false);
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]);
   const [imageUris, setImageUris] = useState(["", ""]);

   const onPressToCarPickKey = async () => {
      try {
         setIsReady(true);
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
         setIsReady(false);
         navigation.navigate("carPickKeyUsing");
      } catch (error: any) {
         return (
            <Modal4
               title="차량 사진 전송 실패"
               contents={error.message}
               positiveText="확인"
               positive={() => {}}
            />
         );
      }
   };

   return (
      <>
         {isReady && <LoadingCircle />}
         <CarPickKeyBeforeUI
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            imageUris={imageUris}
            setImageUris={setImageUris}
            onPressToCarPickKey={onPressToCarPickKey}
         />
      </>
   );
}
