import styled from "@emotion/native";
import React from "react";
import { ITextProps } from "./TextTypes";

export default function Contents2Text(props: ITextProps) {
   return <CustomText color={props.color}>{props.children}</CustomText>;
}

const CustomText = styled.Text`
   font-size: 10px;
   font-family: Regular;
   includeFontPadding: false;
   color: ${(props: { color?: string }) =>
      props.color ? `${props.color}` : `#000`};
`;
