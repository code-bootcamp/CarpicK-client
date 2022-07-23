import { Dispatch, SetStateAction } from "react";

export interface IJoinPageUIProps {
   openTimer: boolean;
   openRedo: boolean;
   setOpenRedo: Dispatch<SetStateAction<boolean>>;
   setOpenTimer: Dispatch<SetStateAction<boolean>>;
   isValidEmail: boolean;
   isValidPhone: boolean;
   onPressNext: () => void;
   onPressCheckEmail: () => Promise<JSX.Element | undefined>;
   onPressSMS: () => Promise<JSX.Element | undefined>;
   onPressCheckPhoneTruthNum: () => Promise<void>;
   control: any;
   handleSubmit: any;
   formState: any;
   setToken: Dispatch<SetStateAction<string>>;
   passwordAgain: string;
}
