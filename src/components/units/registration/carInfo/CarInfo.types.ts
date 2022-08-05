import { Dispatch, SetStateAction } from "react";
import { FieldValues, FormState } from "react-hook-form";

export interface ICarInfoUIProps {
   userData?: any;
   control: any;
   handleSubmit: any;
   formState: FormState<FieldValues>;
   setOil: Dispatch<SetStateAction<string>>;
   setIsHipass: Dispatch<SetStateAction<boolean>>;
   onPressNext: (data: any) => void;
}
