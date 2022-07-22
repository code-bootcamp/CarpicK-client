import { useQuery } from "@apollo/client";
import moment from "moment";
import { useEffect, useState } from "react";
import CarPickKeyUsingUI from "./CarPickKey.using.presenter";
import { FETCH_LOGIN_USER } from "./CarPickKey.using.queries";

export default function CarPickKeyUsing({ navigation }: any) {
   const { data } = useQuery(FETCH_LOGIN_USER);
   const [remainTime, setRemainTime] = useState(0);
   const [isDelay, setIsDelay] = useState(false);

   const [openDoor, setOpenDoor] = useState(false);
   const [closeDoor, setCloseDoor] = useState(false);

   useEffect(() => {
      const timeDiff = moment
         .duration(
            moment(data?.fetchLoginUser.reservation[0].endTime).diff(new Date())
         )
         .asMinutes();
      setRemainTime(timeDiff);
      if (timeDiff < 0) setIsDelay(true);
   }, [data]);

   const finalHour = parseInt(String(remainTime / 60));
   const finalMin = Math.ceil(remainTime - finalHour * 60);

   const onChangeOpenDoor = () => {
      setOpenDoor((prev) => !prev);
   };

   const onChangeCloseDoor = () => {
      setCloseDoor((prev) => !prev);
   };

   const onPressToMain = () => {
      navigation.navigate("main");
   };

   const onPressReturn = () => {
      navigation.navigate("carPickKeyAfter", {
         carId: data?.fetchLoginUser.reservation[0].car.id,
         reservationId: data?.fetchLoginUser.reservation[0].id,
      });
   };

   return (
      <CarPickKeyUsingUI
         isDelay={isDelay}
         data={data}
         openDoor={openDoor}
         closeDoor={closeDoor}
         setOpenDoor={setOpenDoor}
         setCloseDoor={setCloseDoor}
         onChangeOpenDoor={onChangeOpenDoor}
         onChangeCloseDoor={onChangeCloseDoor}
         onPressToMain={onPressToMain}
         onPressReturn={onPressReturn}
         finalHour={finalHour}
         finalMin={finalMin}
      />
   );
}
