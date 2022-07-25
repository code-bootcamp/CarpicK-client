import { Dispatch, SetStateAction } from "react";

export interface IRentProcess1PageUIProps {
   onPressNext: () => void;
   data?: any;
   startTime: string;
   endTime: string;
   finalHour: number;
   finalMin: number;
   TotalHour: number;
   price: number;
   totalPrice: number;
   setIsVisible: Dispatch<SetStateAction<boolean>>;
   checked: string;
   setChecked: Dispatch<SetStateAction<string>>;
}
