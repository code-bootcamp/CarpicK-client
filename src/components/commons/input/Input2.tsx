/*
 * Parameter
 * placeholder(string), onChangeText(method)
 */

import styled from "@emotion/native";
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface IInput2Props {
   placeholder?: string;
   onChangeText?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export default function Input2(props: IInput2Props) {
   const [isFocus, setIsFocus] = useState(false);

   return (
      <CustomTextInput
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         style={{ borderBottomColor: isFocus ? "#5D8BFF" : "black" }}
         placeholderTextColor={"#A5A5A5"}
         placeholder={props.placeholder}
         onChange={props.onChangeText}
      />
   );
}

const CustomTextInput = styled.TextInput`
   width: 100%;
   height: 45px;
   padding: 0 8px;
   border-bottom-width: 1px;
`;
