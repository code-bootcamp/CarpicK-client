import { useQuery } from "@apollo/client";
import { useState } from "react";
import FilterUI from "./Filter.presenter";
import { FETCH_CAR_CATEGORY } from "./Filter.queries";

export default function FilterPage() {
   const { data } = useQuery(FETCH_CAR_CATEGORY);

   const [selectedCar, setSelectedCar] = useState<string[]>([]);

   // 선택된 차종을 selectedCar state에 저장
   const onChangeSelectedCar = (selectedCar: string[]) => {
      setSelectedCar(selectedCar);
   };

   // 하단 최종 선택 버튼 동작
   const onPressSelected = () => {
      console.log(selectedCar);
   };

   return (
      <FilterUI
         data={data}
         onChangeSelectedCar={onChangeSelectedCar}
         selectedCar={selectedCar}
         onPressSelected={onPressSelected}
      />
   );
}
