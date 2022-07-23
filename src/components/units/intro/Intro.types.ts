import { Dispatch, SetStateAction } from "react";

export interface IIntroPageUIProps {
   onPressLogin: () => void;
   onPressJoin: () => void;
   activeTab: number;
   setActiveTab: Dispatch<SetStateAction<number>>;
}
