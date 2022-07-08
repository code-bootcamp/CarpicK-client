import { FieldValues, FormState } from "react-hook-form";

export interface ICarInfoUIProps {
   control: any;
   handleSubmit: any;
   formState: FormState<FieldValues>;
   onPressNext: (data: any) => void;
}
