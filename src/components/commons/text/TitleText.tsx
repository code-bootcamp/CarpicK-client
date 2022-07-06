import styled from "@emotion/native";
import React from "react";
import { ITextProps } from "./TextTypes";

export default function TitleText(props: ITextProps) {
   return <CustomText color={props.color}>{props.children}</CustomText>;
}

const CustomText = styled.Text`
   font-size: 20px;
   font-family: Bold;
   includeFontPadding: false;
   color: ${(props: { color?: string }) =>
      props.color ? `${props.color}` : `#000`};
`;
