import { Dispatch, SetStateAction } from "react";

export interface ICarPhotosUIProps {
   imageFiles: string[];
   setImageFiles: Dispatch<SetStateAction<string[]>>;
   onPressNext: () => void;
}
