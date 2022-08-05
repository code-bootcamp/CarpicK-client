import CarRegistrationUI from "./CarRegistration.presenter";
import { useMutation } from "@apollo/client";
import { ReactNativeFile } from "apollo-upload-client";
import { useState } from "react";
import { CREATE_CAR_REGISTRATION, UPLOAD_FILE } from "../Registration.queries";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import LoadingCircle from "../../../commons/loadingCircle/LoadingCircle";

export default function CarRegistrationPage({ navigation, route }: any) {
   const [uploadFile] = useMutation(UPLOAD_FILE);
   const [createCarRegistration] = useMutation(CREATE_CAR_REGISTRATION);
   const [msg, setMsg] = useState("");
   const [openModal1, setOpenModal1] = useState(false);
   const [openModal2, setOpenModal2] = useState(false);
   const [openLoading, setOpenLoading] = useState(false);
   const [imageFiles, setImageFiles] = useState<ReactNativeFile[]>([]); // 미리볼수있는 이미지 주소(캐시파일)
   const [imageUris, setImageUris] = useState([""]); // 실질적으로 전송할 이미지 파일(ReactNativeFile)

   const onPressToMain = () => {
      setOpenModal2(false);
      navigation.replace("mainStack");
   };

   const onPressRegister = async () => {
      try {
         setOpenLoading(true);
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
         setOpenLoading(false);
         setMsg(`차량 등록 신청이 완료되었습니다.\n검토 후 연락드리겠습니다.`);
         setOpenModal2(true);
      } catch (error: any) {
         setMsg(`이미 등록 하셨습니다.\n마이페이지에서 현황을 확인해주세요.`);
         setOpenModal1(true);
      }
   };

   return (
      <>
         {openModal1 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal1(false)}
            />
         )}
         {openModal2 && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={onPressToMain}
            />
         )}
         {openLoading && <LoadingCircle />}
         <CarRegistrationUI
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            imageUris={imageUris}
            setImageUris={setImageUris}
            onPressRegister={onPressRegister}
         />
      </>
   );
}
