import styled from "@emotion/native";

export const HamburgerTouch = styled.TouchableOpacity`
   width: 80px;
   height: 30px;
   margin-right: 20px;
   align-items: flex-end;
   justify-content: center;
`;

export const HamburgerImageWrapper = styled.View`
   width: 65px;
   height: 30px;
   align-items: flex-end;
   justify-content: center;
`;

export const DrawerHeader = styled.View`
   width: 100%;
   height: 75px;
   padding: 5px;
   border-bottom-width: 1px;
   border-color: #a5a5a5;
`;

export const DrawerContentWrapper = styled.View`
   flex: 1;
   background-color: #ffffff;
   padding-top: 10px;
`;

export const DrawerContents = styled.View`
   flex-direction: row;
`;
export const UserImage = styled.View``;
export const UserInfoWrapper = styled.View`
   padding-left: 10px;
`;
export const UpdateUserInfoTouch = styled.TouchableOpacity``;
export const UpdateUserInfoTextHitBox = styled.View`
   width: 150px;
   height: 30px;
`;

export const LogoutTouch = styled.TouchableOpacity`
   width: 100%;
   height: 30px;
   /* background-color: palegoldenrod; */
   flex-direction: row;
   align-items: center;
   padding-left: 20px;
   margin-bottom: 10px;
`;
