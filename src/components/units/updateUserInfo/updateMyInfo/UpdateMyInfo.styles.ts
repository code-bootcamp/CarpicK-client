import styled from "@emotion/native";
import colors from "../../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
   padding-bottom: 70px;
`;

export const Profile = styled.View`
   width: 100%;
   height: 88px;
   flex-direction: row;
   background-color: #ffffff;
   align-items: center;
   padding-left: 20px;
   margin-top: 10px;
`;

export const UserInfo = styled.View`
   flex-direction: column;
   padding-left: 14px;
`;

export const UserName = styled.View`
   padding-bottom: 3px;
`;

export const UserId = styled.View``;

export const PhoneNumber = styled.View`
   margin-top: 40px;
`;

export const PhoneNumberInputWrapper = styled.View`
   flex-direction: row;
   width: 100%;
   margin-top: 12.12px;
`;

export const PhoneNumberInput = styled.TextInput`
   width: 70%;
   height: 55px;
   font-family: Regular;
   font-size: 13px;
   padding: 17px 14px;
   color: #a5a5a5;
   background-color: #ffffff;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
`;

export const Error = styled.View`
   padding-top: 8px;
`;
export const CheckTouchWrapper = styled.View``;

export const CheckTouch = styled.TouchableOpacity`
   width: 30%;
   align-items: center;
   justify-content: center;
   border-top-right-radius: 5px;
   border-bottom-right-radius: 5px;
   background-color: #5d8bff;
`;

export const TokenInputWrapper = styled.View`
   flex-direction: row;
   width: 100%;
   margin-top: 20px;
`;

export const TokenInput = styled.TextInput`
   width: 70%;
   height: 55px;
   font-family: Regular;
   font-size: 13px;
   padding: 17px 14px;
   color: #a5a5a5;
   background-color: #ffffff;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
`;

export const Password = styled.View`
   margin-top: 40px;
`;

export const PasswordInputWrapper = styled.View`
   margin-top: 12.12px;
`;

export const PasswordInput = styled.TextInput`
   width: 100%;
   height: 55px;
   font-family: Regular;
   font-size: 13px;
   padding: 17px 14px;
   color: #a5a5a5;
   background-color: #ffffff;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
`;

export const PassWordCheckInputWrapper = styled.View`
   margin-top: 12.12px;
`;

export const PasswordCheckInput = styled.TextInput`
   width: 100%;
   height: 55px;
   font-family: Regular;
   font-size: 13px;
   padding: 17px 14px;
   color: #a5a5a5;
   background-color: #ffffff;
   border-top-left-radius: 5px;
   border-bottom-left-radius: 5px;
`;

export const SaveTouchWrapper = styled.View`
   margin-top: 64px;
`;

export const SaveTouch = styled.TouchableOpacity`
   width: 100%;
   height: 45px;
   border-radius: 5px;
   background-color: #5d8bff;
   align-items: center;
   justify-content: center;
`;

export const TopMenu = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
`;

export const TitleWrapper = styled.TouchableOpacity`
   width: 50%;
   height: 80px;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => (props.isSelected ? colors.theme : "#fff")};
`;
