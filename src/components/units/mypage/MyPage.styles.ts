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

export const CarStatusBox = styled.View`
   flex: 1;
   border: ${(props: { showStatus: boolean }) =>
      props.showStatus
         ? `2px solid ${colors.theme}`
         : `2px solid ${colors.light_gray}`};
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;

export const CarStatusBoxFail = styled.View`
   flex: 1;
   border: ${(props: { showStatus: boolean }) =>
      props.showStatus ? `2px solid tomato` : `2px solid ${colors.light_gray}`};
   border-radius: 10px;
   justify-content: center;
   align-items: center;
`;

export const CarStatus = styled.Text`
   font-size: 17px;
   color: ${(props: { showStatus: boolean }) =>
      props.showStatus ? colors.theme : colors.light_gray};
   font-weight: 700;
`;

export const CarStatusFail = styled.Text`
   font-size: 17px;
   color: ${(props: { showStatus: boolean }) =>
      props.showStatus ? "tomato" : colors.light_gray};
   font-weight: 700;
`;

export const CarImage = styled.Image`
   height: 150px;
`;

export const CarInfo = styled.View`
   flex-direction: row;
   justify-content: space-around;
   margin-top: 30px;
`;

export const CarLocation = styled.View`
   flex-direction: row;
   margin-top: 40px;
   align-items: center;
`;

export const InfoWrapper = styled.View`
   position: relative;
`;

export const FailBackgound = styled.View`
   width: 100%;
   height: 100%;
   position: absolute;
   background-color: ${colors.light_gray};
   z-index: 999;
   opacity: 0.7;
   border-radius: 10px;
   align-items: center;
`;

export const TitleBox = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const StatusBox = styled.View`
   width: 48px;
   height: 18px;
   background-color: ${colors.theme};
   justify-content: center;
   align-items: center;
   margin-left: 14px;
`;
