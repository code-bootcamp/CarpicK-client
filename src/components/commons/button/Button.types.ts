import { ReactNode } from "react";

export interface IButtonProps {
   isDisabled?: boolean;
   height?: string;
   backgroundColor?: string;
   borderRadius?: boolean;
   children?: ReactNode;
   onPress?: () => void;
}

export interface ICustomButtonStyledProps {
   height?: string;
   isDisabled?: boolean;
   backgroundColor?: string;
   borderRadius?: boolean;
}
