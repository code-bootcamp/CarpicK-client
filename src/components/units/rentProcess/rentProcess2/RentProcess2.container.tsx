import RentProcess2PageUI from "./RentProcess2.presenter";
import moment from "moment";
import { useState } from "react";

const baseTime = moment().format("YYYY-MM-DD");

export default function RentProcess2Page({ navigation, route }) {
   const [isChecked, setIsChecked] = useState(false);

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

   const onChangeCheck1 = (isChecked: boolean) => {
      setIsChecked(isChecked);
   };
   const onChangeCheck2 = (isChecked: boolean) => {
      setIsChecked(isChecked);
   };

   return (
      <RentProcess2PageUI
         onPressToPayment={onPressToPayment}
         rentPrice={route.params.rentPrice}
         insuPrice={route.params.insuPrice}
         totalPrice={route.params.totalPrice}
         onChangeCheck1={onChangeCheck1}
      />
   );
}
