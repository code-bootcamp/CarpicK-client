export interface IInputProps {
   disabled?: boolean;
   placeholder?: string;
   onChangeText?: (text: string) => void;
}

export interface ICustomTextInputStyledProps {
   isFocus: boolean;
}
