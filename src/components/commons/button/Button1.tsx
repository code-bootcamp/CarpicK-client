/* 높이(string), 베경색상(string), radius 5px(boolean) 지정 가능, 모서리 radius 5px */

import styled from "@emotion/native"
import { ReactNode } from "react";

export interface IButtonProps {
    height?: string;
    backgroundColor?: string;
    borderRadius?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

export default function Button1(props: IButtonProps) {
    return <CustomButton borderRadius={props.borderRadius} height={props.height} backgroundColor={props.backgroundColor} onPress={props.onClick}><ButtonText>{props.children}</ButtonText></CustomButton>
}

const CustomButton = styled.TouchableOpacity`
    width: 100%;
    height: ${(props: any) => props.height ? props.height : "45"}px;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background-color: ${(props: any) => props.backgroundColor || "#5D8BFF"};
    border-radius: ${(props: any) => props.borderRadius ? "5px" : "0"};
`

const ButtonText = styled.Text`
    color: white;
`