import { ReactNativeFile } from "apollo-upload-client";
import { Dispatch, SetStateAction } from "react";

export interface ICarPickKeyAfterUIProps {
   imageFiles: ReactNativeFile[];
   setImageFiles: Dispatch<SetStateAction<ReactNativeFile[]>>;
   imageUris: string[];
   setImageUris: Dispatch<SetStateAction<string[]>>;
   rating: number;
   onChangeRating: (rating: number) => void;
   isModalVisible: boolean;
   onChangeModalVisible: Dispatch<SetStateAction<boolean>>;
   onPressReturn: () => void;
}
