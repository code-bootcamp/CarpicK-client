/*
 *  활성화여부(boolean)
 *  높이(string)
 *  베경색상(string)
 *  radius 5px(boolean) 지정 가능, 모서리 radius 5px 고정
 */

import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";
import { IButtonProps, ICustomButtonStyledProps } from "./Button.types";

export default function Button1(props: IButtonProps) {
   return (
      <CustomButton
         disabled={props.isDisabled}
         isDisabled={props.isDisabled}
         borderRadius={props.borderRadius}
         height={props.height}
         backgroundColor={props.backgroundColor}
         onPress={props.onPress}
      >
         <ButtonText>{props.children}</ButtonText>
      </CustomButton>
   );
}

const CustomButton = styled.TouchableOpacity<ICustomButtonStyledProps>`
   width: 100%;
   height: ${(props) => (props.height ? props.height : "50")}px;
   align-items: center;
   justify-content: center;
   font-size: 14px;
   background-color: ${(props) =>
      props.isDisabled ? colors.gray : props.backgroundColor || "#5D8BFF"};
   border-radius: ${(props) => (props.borderRadius ? "5px" : "0")};
`;

const ButtonText = styled.Text`
   color: white;
`;
