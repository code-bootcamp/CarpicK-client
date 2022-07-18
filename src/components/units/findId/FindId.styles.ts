import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
`;

export const TitleWrapper = styled.View`
   display: flex;
   flex-direction: row;
   padding: 40px 0px;
`;

export const InputWrapperMarginBtm = styled.View`
   width: 100%;
   margin-bottom: 20px;
`;

export const InputRow = styled.View`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`;

export const InputLeft = styled.View`
   width: 65%;
`;

export const Input = styled.TextInput`
   font-family: Regular;
   padding: 0px 14px;
   height: 45px;
   border-bottom-width: 0.5px;
   border-bottom-color: #353535;
`;

export const InputBottomLine = styled.View`
   width: 100%;
   border: 0.5px solid #353535;
`;

export const SubTouch = styled.TouchableOpacity`
   width: 30%;
   background-color: #5d8bff;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
`;

export const ButtonWrapper = styled.View`
   padding-top: 12px;
`;
