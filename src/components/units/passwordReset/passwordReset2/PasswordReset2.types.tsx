import { Dispatch, SetStateAction } from "react";

export interface IPasswordResult2UIProps {
   phone: string;
   openTimer: boolean;
   openRedo: boolean;
   isValidPhone: boolean;
   setPhone: Dispatch<SetStateAction<string>>;
   setToken: Dispatch<SetStateAction<string>>;
   setOpenTimer: Dispatch<SetStateAction<boolean>>;
   setOpenRedo: Dispatch<SetStateAction<boolean>>;
   onPressSMS: () => Promise<JSX.Element | undefined>;
   onPressCheckPhoneTruthNum: () => Promise<void>;
   onPressNext: () => void;
}
