import { useQuery } from "@apollo/client";
import { FETCH_CAR } from "./RentProcess1.queries";
import RentProcess1PageUI from "./RentProcess1.presenter";
import GetRentTime from "../../../../commons/utilities/getRentTime";
import { useState } from "react";
import Modal5 from "../../../commons/modals/modal5/Modal5";

export default function RentProcess1Page({ navigation, route }) {
   // console.log("this is rp1", route.params.id);
   const [checked, setChecked] = useState("first");
   const result = GetRentTime();
   const [isVisible, setIsVisible] = useState(false);

   const { data } = useQuery(FETCH_CAR, {
      variables: {
         carId: route.params.id,
      },
   });

   console.log("this is data", data);
   console.log("this is result", result);

   const onPressNext = () => {
      navigation.navigate("rentProcess2", { data, result });
   };

   return (
      <>
         {isVisible && (
            <Modal5
               startTime={result.startTime}
               endTime={result.endTime}
               positiveText="설정"
               negativeText="취소"
               positive={() => setIsVisible(false)}
               negative={() => setIsVisible(false)}
            />
         )}
         <RentProcess1PageUI
            onPressNext={onPressNext}
            data={data}
            startTime={result.startTime}
            endTime={result.endTime}
            finalHour={result.finalHour}
            finalMin={result.finalMin}
            setIsVisible={setIsVisible}
            checked={checked}
            setChecked={setChecked}
         />
      </>
   );
}
