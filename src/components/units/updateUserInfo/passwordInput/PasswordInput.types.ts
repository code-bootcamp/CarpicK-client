import { Dispatch, SetStateAction } from "react";

export interface IPasswordInputUIProps {
   onPressLoginCheck: () => Promise<void>;
   setPassword: Dispatch<SetStateAction<string>>;
}
