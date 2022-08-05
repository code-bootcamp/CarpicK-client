import { Dispatch, SetStateAction } from "react";

export interface ILicense3LaterPageUIProps {
   result: any;
   base64: any;
   openSubmitButton: boolean;
   onPressGoBack: () => void;
   onPressCheckLicense: () => Promise<void>;
   onPressSubmit: () => Promise<JSX.Element | undefined>;
   setSpecialNumber: Dispatch<SetStateAction<{}>>;
   uri: string | undefined;
}
