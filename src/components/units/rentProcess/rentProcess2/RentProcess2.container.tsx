import RentProcess2PageUI from "./RentProcess2.presenter";
import moment from "moment";
import { useEffect, useState } from "react";

const baseTime = moment().format("YYYY-MM-DD");

export default function RentProcess2Page({ navigation, route }) {
   const [isAllChecked, setIsAllChecked] = useState(true);
   const [isChecked1, setIsChecked1] = useState(true);
   const [isChecked2, setIsChecked2] = useState(true);
   const [isChecked3, setIsChecked3] = useState(true);

   const checkAllHandler = (isChecked: boolean) => {
      setIsAllChecked(isChecked);
      if (isChecked) {
         // 전체 체크 ON
         setIsChecked1(true);
         setIsChecked2(true);
         setIsChecked3(true);
      } else {
         // 전체 체크 OFF
         setIsChecked1(false);
         setIsChecked2(false);
         setIsChecked3(false);
      }
   };
   const check1Handler = (isChecked: boolean) => {
      setIsChecked1(isChecked);
   };
   const check2Handler = (isChecked: boolean) => {
      setIsChecked2(isChecked);
   };
   const check3Handler = (isChecked: boolean) => {
      setIsChecked3(isChecked);
   };

   useEffect(() => {
      if (isChecked1 && isChecked2 && isChecked3) {
         // 3개가 다 체크 되어있을때
         setIsAllChecked(true);
      } else {
         setIsAllChecked(false);
      }
   }, [isChecked1, isChecked2, isChecked3]);

   const onPressToPayment = async () => {
      navigation.navigate("payment", {
         amount: Math.ceil(route.params.totalPrice),
         data: route.params.data.fetchCar,
         startTime: moment(
            baseTime +
               " " +
               `${route.params.startTimeHour}:${route.params.startTimeMin}`
         ),
         endTime: moment(
            baseTime +
               " " +
               `${route.params.endTimeHour}:${route.params.endTimeMin}`
         ),
      });
   };

   return (
      <RentProcess2PageUI
         onPressToPayment={onPressToPayment}
         rentPrice={route.params.rentPrice}
         insuPrice={route.params.insuPrice}
         totalPrice={route.params.totalPrice}
         isAllChecked={isAllChecked}
         isChecked1={isChecked1}
         isChecked2={isChecked2}
         isChecked3={isChecked3}
         checkAllHandler={checkAllHandler}
         check1Handler={check1Handler}
         check2Handler={check2Handler}
         check3Handler={check3Handler}
      />
   );
}
