import { ReactNode } from "react";

export interface ITextProps {
   color?: string;
   fontSize?: string;
   fontFamily?: "Bold" | "Regular";
   children?: ReactNode;
}
