import { useQuery } from "@apollo/client";
import { FETCH_CAR } from "./RentProcess1.queries";
import RentProcess1PageUI from "./RentProcess1.presenter";
import GetRentTime from "../../../../commons/utilities/getRentTime";
import { useEffect, useState } from "react";
import Modal5 from "../../../commons/modals/modal5/Modal5";
import moment from "moment";

export default function RentProcess1Page({ navigation, route }) {
   // console.log("this is rp1", route.params.id);
   const result = GetRentTime();
   const [checked, setChecked] = useState("first");
   const [insuPrcie, setInsuPrcie] = useState(0);
   const [isVisible, setIsVisible] = useState(false);

   const [startTimeHour, setStartTimeHour] = useState("");
   const [startTimeMin, setStartTimeMin] = useState("");
   const [endTimeHour, setEndTimeHour] = useState("");
   const [endTimeMin, setEndTimeMin] = useState("");

   const [indexStartHour, setIndexStartHour] = useState(0);
   const [indexEndHour, setIndexEndHour] = useState(0);

   const [arrHour, setArrHour] = useState([]);

   const { data } = useQuery(FETCH_CAR, {
      variables: {
         carId: route.params.id,
      },
   });

   useEffect(() => {
      if (checked === "first")
         setInsuPrcie(Math.ceil(data?.fetchCar.price * 2));
      else if (checked === "second")
         setInsuPrcie(Math.ceil(data?.fetchCar.price));
      else if (checked === "third")
         setInsuPrcie(Math.ceil(data?.fetchCar.price / 2));
      else setInsuPrcie(Math.ceil(data?.fetchCar.price * 2));
   }, [data?.fetchCar, checked]);

   useEffect(() => {
      genValidTime(result.startTime.split(":")[0]);
      setStartTimeHour(result.startTime.split(":")[0]);
      setStartTimeMin(result.startTime.split(":")[1]);

      setEndTimeHour(result.endTime.split(":")[0]);
      setEndTimeMin(result.endTime.split(":")[1]);
   }, []);

   useEffect(() => {
      searchIndex(arrHour, startTimeHour, endTimeHour);
   }, [startTimeHour, endTimeHour]);

   const TotalMin = moment
      .duration(
         moment(
            moment().format("YYYY-MM-DD") +
               " " +
               `${endTimeHour}:${endTimeMin}`,
            "YYYY-MM-DD HH:mm:ss"
         ).diff(
            moment(
               moment().format("YYYY-MM-DD") +
                  " " +
                  `${startTimeHour}:${startTimeMin}`,
               "YYYY-MM-DD HH:mm:ss"
            )
         )
      )
      .asMinutes();

   const TotalHour = moment
      .duration(
         moment(
            moment().format("YYYY-MM-DD") +
               " " +
               `${endTimeHour}:${endTimeMin}`,
            "YYYY-MM-DD HH:mm:ss"
         ).diff(
            moment(
               moment().format("YYYY-MM-DD") +
                  " " +
                  `${startTimeHour}:${startTimeMin}`,
               "YYYY-MM-DD HH:mm:ss"
            )
         )
      )
      .asHours();

   const finalHour = parseInt(String(TotalMin / 60));
   const finalMin = TotalMin - finalHour * 60;
   const totalPrice =
      Math.ceil((TotalHour * data?.fetchCar.price) / 100) * 100 + insuPrcie;

   console.log("this is startTime", `${startTimeHour}:${startTimeMin}`);
   console.log("this is endTime", `${endTimeHour}:${endTimeMin}`);
   console.log("this is data", data);

   // console.log("this is result", result);

   const onPressNext = () => {
      navigation.navigate("rentProcess2", {
         data,
         result,
         startTimeHour: startTimeHour,
         startTimeMin: startTimeMin,
         endTimeHour: endTimeHour,
         endTimeMin: endTimeMin,
         TotalMin: TotalMin,
         TotalHour: TotalHour,
      });
   };

   const genValidTime = (initialStartHour) => {
      if (result.startTime.split(":")[0][0] === "0") {
         const tmp = Number(initialStartHour[1]);
         const tmpArr = [];

         for (let i = tmp; i <= 24; i++) {
            tmpArr.push(String(i).padStart(2, "0"));
         }
         setArrHour(tmpArr);
      } else {
         const tmp = Number(initialStartHour);
         const tmpArr = [];

         for (let i = tmp; i <= 24; i++) {
            tmpArr.push(String(i));
         }
         setArrHour(tmpArr);
      }
   };

   const searchIndex = (arr, startTimeHour, endTimeHour) => {
      setIndexStartHour(arr.indexOf(startTimeHour));
      setIndexEndHour(arr.indexOf(endTimeHour));
   };

   // console.log("this is index", indexStartHour, indexEndHour);
   // console.log("this is typeof", typeof indexStartHour);
   // console.log("this is typeof", typeof indexEndHour);
   console.log("total price", totalPrice);
   return (
      <>
         {isVisible && (
            <Modal5
               initialStartTime={
                  result.startTime.split(":")[0] +
                  ":" +
                  result.startTime.split(":")[1]
               }
               initialEndTime={
                  result.endTime.split(":")[0] +
                  ":" +
                  result.endTime.split(":")[1]
               }
               startTime={`${startTimeHour}:${startTimeMin}`}
               endTime={`${endTimeHour}:${endTimeMin}`}
               arrHour={arrHour}
               positiveText="설정"
               negativeText="취소"
               setStartTimeHour={setStartTimeHour}
               setStartTimeMin={setStartTimeMin}
               setEndTimeHour={setEndTimeHour}
               setEndTimeMin={setEndTimeMin}
               indexStartHour={indexStartHour}
               indexEndHour={indexEndHour}
               positive={() => setIsVisible(false)}
               negative={() => setIsVisible(false)}
            />
         )}
         <RentProcess1PageUI
            onPressNext={onPressNext}
            data={data}
            startTime={`${startTimeHour}:${startTimeMin}`}
            endTime={`${endTimeHour}:${endTimeMin}`}
            finalHour={finalHour}
            finalMin={finalMin}
            TotalHour={TotalHour}
            price={data?.fetchCar.price}
            totalPrice={totalPrice}
            setIsVisible={setIsVisible}
            checked={checked}
            setChecked={setChecked}
         />
      </>
   );
}
