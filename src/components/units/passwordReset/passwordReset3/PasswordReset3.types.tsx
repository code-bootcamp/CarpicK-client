import { Dispatch, SetStateAction } from "react";

export interface IPasswordResetPage3UIProps {
   passwordAgain: string;
   onChangePassword: (text: string) => void;
   setEmail: Dispatch<SetStateAction<string>>;
   setPassword: Dispatch<SetStateAction<string>>;
   setPasswordAgain: Dispatch<SetStateAction<string>>;
   isValidPassword: boolean;
   onPressResetPassword: () => Promise<void>;
}
