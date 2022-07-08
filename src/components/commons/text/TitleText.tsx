import styled from "@emotion/native";
import React from "react";
import { ITextProps } from "./TextTypes";

export default function TitleText(props: ITextProps) {
   return <CustomText color={props.color} fontFamily={props.fontFamily} fontSize={props.fontSize}>{props.children}</CustomText>;
}

const CustomText = styled.Text`
   font-size: ${(props: any) => props.fontSize || "20"}px;
   font-family: ${(props: any) => props.fontFamily || "Bold"};
   includeFontPadding: false;
   color: ${(props: { color?: string }) =>
      props.color ? `${props.color}` : `#000`};
`;
