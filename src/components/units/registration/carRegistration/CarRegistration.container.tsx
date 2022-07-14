import CarRegistrationUI from "./CarRegistration.presenter";
import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import { CREATE_CAR_REGISTRATION, UPLOAD_FILE } from "../Registration.queries";

export default function CarRegistrationPage({ navigation, route }) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [createCarRegistration] = useMutation(CREATE_CAR_REGISTRATION);

   const [isModalVisible, setIsModalVisible] = useState(false);
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]); // 미리볼수있는 이미지 주소(캐시파일)
   const [imageUris, setImageUris] = useState([""]); // 실질적으로 전송할 이미지 파일(ReactNativeFile)

   const onPressSuccess = () => {
      navigation.navigate("mainStack");
   };

   const onPressRegister = async () => {
      try {
         // 차량사진 uri
         const carUrl = await uploadFile({
            variables: {
               files: route.params.carUrl,
            },
         });

         // 차량 등록증 uri
         const registrationUrl = await uploadFile({
            variables: {
               files: imageFiles,
            },
         });

         const result = await createCarRegistration({
            variables: {
               createCarRegistrationInput: {
                  ...route.params.carInfo, // address, carNumber,
                  carUrl: carUrl.data.uploadFile,
                  registrationUrl: registrationUrl.data.uploadFile[0],
               },
            },
         });

         console.log(`======== 등록성공 ========\n${result}`);
      } catch (error: any) {
         console.error(`======== 등록 에러발생 ========\n${error.message}`);
      }
   };

   return (
      <CarRegistrationUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         imageUris={imageUris}
         setImageUris={setImageUris}
         onPressRegister={onPressRegister}
         isModalVisible={isModalVisible}
         setIsModalVisible={setIsModalVisible}
         onPressSuccess={onPressSuccess}
      />
   );
}
