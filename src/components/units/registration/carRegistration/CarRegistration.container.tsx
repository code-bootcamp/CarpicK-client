import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import CarRegistrationUI from "./CarRegistration.presenter";
import { UPLOAD_FILE } from "./CarRegistration.queries";

const generateRNFile = (uri, name) => {
   return uri
      ? new ReactNativeFile({
           uri,
           type: "image",
           name,
        })
      : null;
};

export default function CarRegistrationPage({ navigation }) {
   const [uploadFile] = useMutation(UPLOAD_FILE);

   const [isModalVisible, setIsModalVisible] = useState(false);
   const [imageFiles, setImageFiles] = useState([""]);

   const onPressRegister = async () => {
      // TODO 마이카 api 요청 후 메인페이지로 이동
      console.log(imageFiles);
      const file = generateRNFile(imageFiles[0], `picture-${Date.now()}`);
      try {
         const imageUrl = await uploadFile({
            variables: {
               files: file,
            },
         });

         console.log(imageUrl);
      } catch (error: any) {
         console.log("실패!!");
         console.error(error.message);
      }
   };

   return (
      <CarRegistrationUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         onPressRegister={onPressRegister}
         isModalVisible={isModalVisible}
         setIsModalVisible={setIsModalVisible}
      />
   );
}
