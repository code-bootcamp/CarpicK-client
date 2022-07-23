import { MutableRefObject } from "react";

export interface ILicense2LaterPageUIProps {
   cameraRef: MutableRefObject<undefined>;
   onPressGoBack: () => void;
   takePic: () => Promise<void>;
}
