import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   display: flex;
   align-items: center;
`;

export const MyScrollView = styled.ScrollView`
   width: 100%;
`;

export const Title = styled.Text`
   font-size: 48px;
   font-family: Bold;
   color: #5d8bff;
   padding: 80px 0px; ;
`;

export const Body = styled.View`
   width: 100%;
`;

export const Input = styled.TextInput`
   width: 100%;
   height: 60px;
   font-size: 14px;
   background-color: #ffffff;
   border-radius: 5px;
   margin-bottom: 20px;
   padding: 0px 14px;
`;

export const LoginTouch = styled.TouchableOpacity`
   width: 100%;
   height: 60px;
   font-size: 14px;
   background-color: #5d8bff;
   border-radius: 5px;
   margin-bottom: 20px;
   align-items: center;
   justify-content: center;
`;

export const LoginText = styled.Text`
   font-family: Regular;
   color: #ffffff;
`;

export const GoogleLoginTouch = styled.TouchableOpacity`
   width: 100%;
   height: 60px;
   font-size: 14px;
   background-color: #ffffff;
   border-radius: 5px;
   margin-bottom: 20px;
   align-items: center;
   display: flex;
   flex-direction: row;
   padding-left: 14px;
   position: relative;
`;

export const GoogleText = styled.Text`
   font-family: Regular;
   color: #353535;
   width: 100%;
   text-align: center;
`;

export const TextBox = styled.View`
   width: 100%;
   position: absolute;
`;

export const Footer = styled.View`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const FooterTouch = styled.TouchableOpacity``;

export const IdFind = styled.Text`
   font-family: Regular;
   color: #a5a5a5;
   width: 100%;
   text-align: center;
`;
export const PwReset = styled.Text`
   font-family: Regular;
   color: #a5a5a5;
   width: 100%;
   text-align: center;
`;
export const ToJoin = styled.Text`
   font-family: Regular;
   color: #5d8bff;
   width: 100%;
   text-align: center;
`;

export const SectionBar = styled.View`
   border: 0.5px solid #a5a5a5;
   background-color: #a5a5a5;
   height: 14px;
   margin: 0px 8px;
`;
