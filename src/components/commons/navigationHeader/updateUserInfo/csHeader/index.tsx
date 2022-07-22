import styled from "@emotion/native";
import React, { ReactNode } from "react";
import * as R from "react-native";
import BackIcon from "../../../../../../assets/customerService/header-back.svg";

interface IUpdateUserInfoProps {
   children?: ReactNode;
   onPress?: () => void;
}

export default function UpdateUserInfo(props: IUpdateUserInfoProps) {
   return (
      <Header>
         <HeaderTitle>{props.children}</HeaderTitle>
         <ImageView>
            <R.TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
               <BackIcon />
            </R.TouchableOpacity>
         </ImageView>
      </Header>
   );
}

const Header = styled.View`
   width: 100%;
   background-color: #f7f8f9;
   font-size: 14px;
   color: #000;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   padding-right: 15px;
   position: relative;
`;

const HeaderTitle = styled.Text`
   font-size: 12px;
   color: #000;
   position: absolute;
   align-items: center;
`;

const ImageView = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: flex-end;
`;
