import styled from "@emotion/native";
import React from "react";
import { ITextProps, ITextStyleProps } from "./TextTypes";

export default function TitleText(props: ITextProps) {
   return (
      <CustomText
         color={props.color}
         fontFamily={props.fontFamily}
         fontSize={props.fontSize}
      >
         {props.children}
      </CustomText>
   );
}

const CustomText = styled.Text<ITextStyleProps>`
   font-size: ${(props) => props.fontSize || "20"}px;
   font-family: ${(props) => props.fontFamily || "Bold"};
   includeFontPadding: false;
   color: ${(props) => (props.color ? `${props.color}` : `#000`)};
`;
