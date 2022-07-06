import styled from "@emotion/native";
import React from "react";
import { ITextProps } from "./TextTypes";

export default function Contents1Text(props: ITextProps) {
   return <CustomText color={props.color} fontSize={props.fontSize} fontFamily={props.fontFamily}>{props.children}</CustomText>;
}

const CustomText = styled.Text`
   font-size: ${(props: any) => props.fontSize || "12"}px;
   font-family: ${(props: any) => props.fontFamily || "Regular"};
   includeFontPadding: false;
   color: ${(props: { color?: string }) =>
      props.color ? `${props.color}` : `#000`};
`;
