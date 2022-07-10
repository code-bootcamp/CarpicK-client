import { Dispatch, SetStateAction } from "react";

export interface ICarRegistrationUIProps {
   imageFiles: string[];
   setImageFiles: Dispatch<SetStateAction<string[]>>;
   onPressRegister: () => void;
}
