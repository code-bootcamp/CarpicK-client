import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import CarPickKeyDetailUI from "./CarPickKey.detail.presenter";
import { FETCH_LOGIN_USER } from "./CarPickKey.detail.queries";

export default function CarPickKeyDetail({ navigation }) {
   const { data, loading } = useQuery(FETCH_LOGIN_USER, {
      fetchPolicy: "network-only",
   });

   const [isChecked, setIsChecked] = useState(false);
   const [isTimeBefore, setIsTimeBefore] = useState(false);

   const onChangeTimeBefore = () => {
      setIsTimeBefore((prev) => !prev);
   };
   console.log("this is detail", data?.fetchLoginUser.reservation);

   const calTime = (startTime: string) => {
      return Math.round(
         (new Date(startTime).getTime() - new Date().getTime()) / 1000 / 60
      );
   };

   const onPressNext = () => {
      if (calTime(data?.fetchLoginUser.reservation[0].startTime) > 10) {
         onChangeTimeBefore();
      } else {
         navigation.navigate("carPickKeyBefore", {
            carId: data?.fetchLoginUser.reservation[0].car.id,
            reservationId: data?.fetchLoginUser.reservation[0].id,
         });
      }
   };

   const onChangeCheck = (isChecked: boolean) => {
      setIsChecked(isChecked);
   };

   return (
      <>
         {!loading && (
            <>
               {data?.fetchLoginUser.reservation.length ? (
                  <CarPickKeyDetailUI
                     data={data}
                     onPressNext={onPressNext}
                     onChangeCheck={onChangeCheck}
                     isChecked={isChecked}
                  />
               ) : (
                  <Modal3
                     contents="예약된 차량이 없습니다."
                     positiveText="확인"
                     positive={() => navigation.goBack()}
                  />
               )}
               {isTimeBefore && (
                  <Modal3
                     contents="예약시간 10분전부터 이용이 가능합니다."
                     positiveText="확인"
                     positive={onChangeTimeBefore}
                  />
               )}
            </>
         )}
      </>
   );
}
