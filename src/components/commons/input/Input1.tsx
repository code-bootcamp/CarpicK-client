/*
* Parameter
* placeholder(string), onChangeText(method)
*/

import styled from "@emotion/native"
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

interface IInput1Props {
    placeholder?: string
    onChangeText?: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

export default function Input1(props: IInput1Props) {
    const [isFocus, setIsFocus] = useState(false);

    return <CustomTextInput
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                style={{borderColor: isFocus ? "#5D8BFF" : "white"}}
                placeholderTextColor={"#A5A5A5"}
                placeholder={props.placeholder}
                onChange={props.onChangeText}/>
}

const CustomTextInput = styled.TextInput`
    width: 100%;
    height: 45px;
    padding: 0 12px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
`