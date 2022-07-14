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

   const TimeTotal = moment
      .duration(
         moment(
            moment().format("YYYY-MM-DD") + " " + `${endTimeHour}:${endTimeMin}`
         ).diff(
            moment(
               moment().format("YYYY-MM-DD") +
                  " " +
                  `${startTimeHour}:${startTimeMin}`
            )
         )
      )
      .asHours();

   useEffect(() => {
      genValidTime(result.startTime.split(":")[0]);
      setStartTimeHour(result.startTime.split(":")[0]);
      setStartTimeMin(result.startTime.split(":")[1]);

      setEndTimeHour(result.endTime.split(":")[0]);
      setEndTimeMin(result.endTime.split(":")[1]);
   }, []);

   useEffect(() => {
      searchIndex(arrHour, startTimeHour, endTimeHour);
   }, [startTimeHour]);

   console.log("this is startTime", `${startTimeHour}:${startTimeMin}`);
   console.log("this is endTime", `${endTimeHour}:${endTimeMin}`);

   console.log("this is data", data);
   console.log("this is result", result);
   console.log("time TOTAl", TimeTotal);

   const onPressNext = () => {
      navigation.navigate("rentProcess2", {
         data,
         result,
         startTimeHour: startTimeHour,
         startTimeMin: startTimeMin,
         endTimeHour: endTimeHour,
         endTimeMin: endTimeMin,
         TimeTotal: TimeTotal,
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
   console.log("this is index", indexStartHour, indexEndHour);

   console.log("this is typeof", typeof indexStartHour);
   console.log("this is typeof", typeof indexEndHour);

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
            finalHour={result.finalHour}
            finalMin={result.finalMin}
            setIsVisible={setIsVisible}
            checked={checked}
            setChecked={setChecked}
         />
      </>
   );
}
