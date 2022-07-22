import { MutableRefObject } from "react";

export interface ILicense2PageUiProps {
   cameraRef: MutableRefObject<undefined>;
   onPressGoBack: () => void;
   takePic: () => Promise<void>;
}
