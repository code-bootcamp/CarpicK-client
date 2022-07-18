import { useState } from "react";
import CarPickKeyDetailUI from "./CarPickKey.detail.presenter";

export default function CarPickKeyDetail({ navigation }) {
   const [isChecked, setIsChecked] = useState(false);

   const onPressNext = () => {
      navigation.navigate("carPickKeyBefore");
   };

   const onChangeCheck = (isChecked: boolean) => {
      setIsChecked(isChecked);
   };

   return (
      <CarPickKeyDetailUI
         onPressNext={onPressNext}
         onChangeCheck={onChangeCheck}
         isChecked={isChecked}
      />
   );
}
