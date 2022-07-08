import styled from "@emotion/native";
import { useState } from "react";
import colors from "../../../commons/lib/colors";
import { ICustomTextInputStyledProps, IInputProps } from "./Input.types";

export default function Input1(props: IInputProps) {
   const [isFocus, setIsFocus] = useState(false);

   return (
      <CustomTextInput
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
   padding: 0 10px;
   border-style: solid;
   border-width: 1px;
   border-radius: 5px;
   border-color: ${(props) => (props.isFocus ? colors.theme : "white")};
`;
