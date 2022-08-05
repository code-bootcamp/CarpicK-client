import { MutableRefObject } from "react";

export interface IFilterUIProps {
   data?: any;
   resetRef: MutableRefObject<{}>;
   onChangeSelectedCar: (selectedCar: string[]) => void;
   selectedCar: string[];
   PSelectedCar: string[];
   onPressSelected: () => void;
   onPressReset: () => void;
   onPressBack: () => void;
}
