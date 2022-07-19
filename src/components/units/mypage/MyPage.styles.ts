import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
   background-color: white;
`;

export const Profile = styled.View`
   width: 100%;
   height: 88px;
   flex-direction: row;
   background-color: #ffffff;
   align-items: center;
`;

export const UserInfo = styled.View`
   flex: 1;
   flex-direction: column;
   margin-left: 14px;
`;

export const UpdateInfoButton = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
`;

export const AuthContainer = styled.View`
   flex-direction: row;
   align-items: center;
   padding-bottom: 10px;
`;

export const NoAuthBox = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: space-between;
`;

export const NoAuthRowCenter = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const MoveToLicenseButton = styled.TouchableOpacity`
   flex-direction: row;
   align-items: center;
`;

export const HR = styled.View`
   width: 100%;
   height: 0.7px;
   background-color: ${colors.light_gray};
`;

export const EmptyMyCarBox = styled.View`
   height: 100px;
   justify-content: center;
   align-items: center;
`;

export const MyCarContainer = styled.View`
   flex: 1;
   padding: 25px 0;
`;

export const CarImage = styled.Image`
   height: 150px;
`;

export const CarInfo = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 30px;
`;
