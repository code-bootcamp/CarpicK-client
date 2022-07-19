export interface IRentProcess2Props {
   onPressToPayment: () => Promise<void>;
   rentPrice: any;
   insuPrice: any;
   totalPrice: any;
   isAllChecked: boolean;
   isChecked1: boolean;
   isChecked2: boolean;
   isChecked3: boolean;
   checkAllHandler: (isChecked: boolean) => void;
   check1Handler: (isChecked: boolean) => void;
   check2Handler: (isChecked: boolean) => void;
   check3Handler: (isChecked: boolean) => void;
}
