import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import FilterUI from "./Filter.presenter";
import { FETCH_CAR_CATEGORY } from "./Filter.queries";

export default function FilterPage({ navigation, route }) {
   const { data } = useQuery(FETCH_CAR_CATEGORY);

   const [selectedCar, setSelectedCar] = useState<string[]>([]);

   const resetRef = useRef({});

   const onPressBack = () => {
      navigation.goBack();
   };

   const onPressReset = () => {
      resetRef.current.resetSelected();
   };

   // 선택된 차종을 selectedCar state에 저장
   const onChangeSelectedCar = (selectedCar: string[]) => {
      setSelectedCar(selectedCar);
   };

   // 하단 최종 선택 버튼 동작
   const onPressSelected = () => {
      route.params.setSelectedCar(selectedCar);
      navigation.navigate("map", { selectedCar: selectedCar });
   };

   return (
      <FilterUI
         data={data}
         resetRef={resetRef}
         onChangeSelectedCar={onChangeSelectedCar}
         selectedCar={selectedCar}
         PSelectedCar={route.params.selectedCar}
         onPressSelected={onPressSelected}
         onPressReset={onPressReset}
         onPressBack={onPressBack}
      />
   );
}
