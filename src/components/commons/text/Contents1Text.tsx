import styled from "@emotion/native";
import React from "react";
import { IContents1TextStyleProps, ITextProps } from "./TextTypes";

export default function Contents1Text(props: ITextProps) {
   return (
      <CustomText
         color={props.color}
         fontSize={props.fontSize}
         fontFamily={props.fontFamily}
      >
         {props.children}
      </CustomText>
   );
}

const CustomText = styled.Text<IContents1TextStyleProps>`
   font-size: ${(props) => props.fontSize || "12"}px;
   font-family: ${(props) => props.fontFamily || "Regular"};
   includeFontPadding: false;
   color: ${(props) => (props.color ? `${props.color}` : `#000`)};
`;
