import CarInfoUI from "./CarInfo.presenter";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../Registration.queries";
import Modal3 from "../../../commons/modals/modal3/Modal3";

export default function CarInfoPage({ navigation }) {
   const { data: userData } = useQuery(FETCH_LOGIN_USER);
   const [msg, setMsg] = useState("");
   const [openModal, setOpenModal] = useState(false);

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
   console.log(userData);
   const onPressNext = (data: any) => {
      if (!userData.fetchLoginUser.isAuth) {
         setMsg(`운전면허를 등록해야\n 서비스 이용이 가능합니다.`);
         setOpenModal(true);
         return;
      }
      const carInfo = { ...data, oil, isHipass };
      navigation.navigate("carPhotos", { carInfo });
   };

   return (
      <>
         {openModal && (
            <Modal3
               contents={msg}
               positiveText="확인"
               positive={() => setOpenModal(false)}
            />
         )}
         <CarInfoUI
            userData={userData}
            control={control}
            handleSubmit={handleSubmit}
            formState={formState}
            setOil={setOil}
            setIsHipass={setIsHipass}
            onPressNext={onPressNext}
         />
      </>
   );
}
