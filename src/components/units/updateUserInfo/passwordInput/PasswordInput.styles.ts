import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   position: relative;
`;

export const TitleWrapper = styled.View`
   padding-top: 11px;
`;
export const TitleSubWrapper = styled.View`
   padding-top: 10px;
   padding-bottom: 50px;
`;

export const ImageWrapper = styled.View`
   width: 100%;
   height: 70%;
   flex-direction: row;
   justify-content: flex-end;
   align-items: flex-end;
   padding-bottom: 30px;
`;

export const PasswordInputWrapper = styled.View`
   flex-direction: row;
   width: 100%;
`;

export const PasswordInput = styled.TextInput`
   width: 80%;
   font-family: Regular;
   font-size: 13px;
   padding: 17px 14px;
   color: #a5a5a5;
   background-color: #ffffff;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
`;

export const PassWordCheckTouchWrapper = styled.View``;
export const PassWordCheckTouch = styled.TouchableOpacity`
   width: 70px;
   align-items: center;
   justify-content: center;
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
   background-color: #5d8bff;
`;
