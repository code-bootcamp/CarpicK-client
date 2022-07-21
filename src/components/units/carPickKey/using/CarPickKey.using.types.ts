import { Dispatch, SetStateAction } from "react";

export interface ICarPickKeyUsingUIProps {
   isDelay: boolean;
   data?: any;
   openDoor: boolean;
   closeDoor: boolean;
   finalHour: number;
   finalMin: number;
   setOpenDoor: Dispatch<SetStateAction<boolean>>;
   setCloseDoor: Dispatch<SetStateAction<boolean>>;
   onChangeOpenDoor: () => void;
   onChangeCloseDoor: () => void;
   onPressToMain: () => void;
   onPressUnlock: () => void;
   onPressLock: () => void;
   onPressReturn: () => void;
}
