import { Dispatch, SetStateAction } from "react";

export interface IUploadImageProps {
   imageFile: string;
   imageFiles: string[];
   setImageFiles: Dispatch<SetStateAction<string[]>>;
   index: number;
}
