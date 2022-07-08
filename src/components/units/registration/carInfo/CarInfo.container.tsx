import CarInfoUI from "./CarInfo.presenter";
import { useForm } from "react-hook-form";

export default function CarInfoPage({ navigation }) {
   const { control, handleSubmit, formState } = useForm({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
         carNumber: "",
         carType: "",
      },
   });

   const onPressNext = (data: any) => {
      console.log(data);
      navigation.navigate("carPhotos");
   };

   return (
      <CarInfoUI
         control={control}
         handleSubmit={handleSubmit}
         formState={formState}
         onPressNext={onPressNext}
      />
   );
}
