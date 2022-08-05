import { AuthRequestPromptOptions, AuthSessionResult } from "expo-auth-session";
import { Dispatch, SetStateAction } from "react";

export interface ILoginPageUIProps {
   onPressLogin: () => Promise<void>;
   onPressLogout: () => Promise<JSX.Element | undefined>;
   onPressToFindId: () => void;
   onPressToPasswordReset: () => void;
   onPressToJoin: () => void;
   setEmail: Dispatch<SetStateAction<string>>;
   setPassword: Dispatch<SetStateAction<string>>;
   // promptAsync: (
   //    options?: AuthRequestPromptOptions | undefined
   // ) => Promise<AuthSessionResult>;
   googleSignIn: () => void;
}
