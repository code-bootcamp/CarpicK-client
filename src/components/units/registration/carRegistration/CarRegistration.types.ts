import { ReactNativeFile } from "apollo-upload-client";
import { Dispatch, SetStateAction } from "react";

export interface ICarRegistrationUIProps {
   imageFiles: ReactNativeFile[];
   setImageFiles: Dispatch<SetStateAction<ReactNativeFile[]>>;
   imageUris: string[];
   setImageUris: Dispatch<SetStateAction<string[]>>;
   onPressRegister: () => void;
}
