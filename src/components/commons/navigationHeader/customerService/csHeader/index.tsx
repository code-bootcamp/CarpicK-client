import styled from "@emotion/native";
import React from "react";
import BackIcon from "../../../../../../assets/customerService/header-back.svg";

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
`;

const ImageView = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: flex-end;
`;

const IconTouch = styled.TouchableOpacity``;

export default function CustomerService(props) {
   return (
      <Header>
         <HeaderTitle>{props.children}</HeaderTitle>
         <ImageView>
            <IconTouch onPress={props.onPress} activeOpacity={0.7}>
               <BackIcon />
            </IconTouch>
         </ImageView>
      </Header>
   );
}
