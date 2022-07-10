import { useState } from "react";
import CarRegistrationUI from "./CarRegistration.presenter";

export default function CarRegistrationPage({ navigation }) {
   const [imageFiles, setImageFiles] = useState<string[]>([""]);

   const onPressRegister = () => {
      // TODO 마이카 api 요청 후 메인페이지로 이동
   };

   return (
      <CarRegistrationUI
         imageFiles={imageFiles}
         setImageFiles={setImageFiles}
         onPressRegister={onPressRegister}
      />
   );
}
