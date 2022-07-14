import CarInfoUI from "./CarInfo.presenter";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../Registration.queries";

export default function CarInfoPage({ navigation }) {
   const { data } = useQuery(FETCH_LOGIN_USER);

   const { control, handleSubmit, formState } = useForm({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: {
         address: "",
         carNumber: "",
         model: "",
      },
   });

   const [oil, setOil] = useState("GASOLINE");
   const [isHipass, setIsHipass] = useState(true);

   const onPressNext = (data: any) => {
      const carInfo = { ...data, oil, isHipass };
      navigation.navigate("carPhotos", { carInfo });
   };

   return (
      <CarInfoUI
         data={data}
         control={control}
         handleSubmit={handleSubmit}
         formState={formState}
         setOil={setOil}
         setIsHipass={setIsHipass}
         onPressNext={onPressNext}
      />
   );
}
