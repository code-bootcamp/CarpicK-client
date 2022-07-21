import { useQuery } from "@apollo/client";
import { useState } from "react";
import CarPickKeyUsingUI from "./CarPickKey.using.presenter";
import { FETCH_LOGIN_USER } from "./CarPickKey.using.queries";

export default function CarPickKeyUsing({ navigation }) {
   const { data } = useQuery(FETCH_LOGIN_USER);

   const [openDoor, setOpenDoor] = useState(false);
   const [closeDoor, setCloseDoor] = useState(false);

   const onChangeOpenDoor = () => {
      setOpenDoor((prev) => !prev);
   };

   const onChangeCloseDoor = () => {
      setCloseDoor((prev) => !prev);
   };

   const onPressToMain = () => {
      navigation.navigate("main");
      // navigation.goBack();
   };

   const onPressUnlock = () => {
      console.log("문열림");
   };

   const onPressLock = () => {
      console.log("문잠김");
   };

   const onPressReturn = () => {
      navigation.navigate("carPickKeyAfter", {
         carId: data?.fetchLoginUser.reservation[0].car.id,
         reservationId: data?.fetchLoginUser.reservation[0].id,
      });
   };

   return (
      <CarPickKeyUsingUI
         data={data}
         openDoor={openDoor}
         closeDoor={closeDoor}
         setOpenDoor={setOpenDoor}
         setCloseDoor={setCloseDoor}
         onChangeOpenDoor={onChangeOpenDoor}
         onChangeCloseDoor={onChangeCloseDoor}
         onPressToMain={onPressToMain}
         onPressUnlock={onPressUnlock}
         onPressLock={onPressLock}
         onPressReturn={onPressReturn}
      />
   );
}
