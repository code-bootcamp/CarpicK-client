import { Dispatch, SetStateAction } from "react";

export interface ITimerProps {
   setOpenTimer: Dispatch<SetStateAction<boolean>>;
   setOpenRedo: Dispatch<SetStateAction<boolean>>;
   setToken: Dispatch<SetStateAction<string>>;
}

export interface ITimerUIProps {
   min: number;
   sec: number;
}
