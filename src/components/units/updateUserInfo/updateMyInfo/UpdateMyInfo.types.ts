import { Dispatch, SetStateAction } from "react";

export interface IUpdateMyInfoUIProps {
   isSelected: boolean;
   isEditable: boolean;
   setIsSelected: Dispatch<SetStateAction<boolean>>;
   phone: string;
   openTimer: boolean;
   openRedo: boolean;
   isValidPhone: boolean;
   isValidPassword: boolean;
   passwordAgain: string;
   setPhone: Dispatch<SetStateAction<string>>;
   setToken: Dispatch<SetStateAction<string>>;
   setPasswordAgain: Dispatch<SetStateAction<string>>;
   setOpenTimer: Dispatch<SetStateAction<boolean>>;
   setOpenRedo: Dispatch<SetStateAction<boolean>>;
   onPress: () => void;
   onPressSMS: () => Promise<JSX.Element | undefined>;
   onPressCheckPhoneTruthNum: () => Promise<void>;
   onPressChangePhoneNum: () => Promise<JSX.Element | undefined>;
   onPressChangePwd: () => Promise<JSX.Element | undefined>;
   onChangePassword: (text: string) => void;
   name: string;
   email: string;
}
