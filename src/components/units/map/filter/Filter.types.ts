export interface IFilterUIProps {
   data?: any;
   onChangeSelectedCar: (selectedCar: string[]) => void;
   selectedCar: string[];
   onPressSelected: () => void;
}
