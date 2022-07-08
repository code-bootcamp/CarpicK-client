import styled from "@emotion/native";
import { useState } from "react";
import colors from "../../../commons/lib/colors";
import { ICustomTextInputStyledProps, IInputProps } from "./Input.types";

export default function Input2(props: IInputProps) {
   const [isFocus, setIsFocus] = useState(false);

   return (
      <CustomTextInput
         editable={props.disabled}
         isFocus={isFocus}
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         placeholderTextColor={colors.gray}
         placeholder={props.placeholder}
         onChangeText={props.onChangeText}
      />
   );
}

const CustomTextInput = styled.TextInput<ICustomTextInputStyledProps>`
   width: 100%;
   height: 45px;
   padding: 0 5px;
   border-bottom-width: 1px;
   border-bottom-color: ${(props) =>
      props.isFocus ? colors.theme : colors.black};
`;
