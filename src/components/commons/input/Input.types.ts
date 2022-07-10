import { KeyboardTypeOptions } from "react-native";

export interface IInputProps {
   value?: string;
   disabled?: boolean;
   placeholder?: string;
   keyboardType?: KeyboardTypeOptions;
   maxLength?: number;
   secureTextEntry?: boolean;
   onChangeText?: (text: string) => void;
}

export interface ICustomTextInputStyledProps {
   isFocus: boolean;
}
