import { Dispatch, SetStateAction } from "react";

export interface IPasswordResultUIProps {
   setEmail: Dispatch<SetStateAction<string>>;
   onPressNext: () => Promise<void>;
   email: string;
}
