import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   align-items: center;
   padding: 30px 0px;
`;

export const TitleWrapper = styled.View`
   padding-left: 15px;
`;

export const DoubleWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 20px;
`;

export const VerticalCard = styled.TouchableOpacity`
   position: relative;
   padding-top: 24px;
   width: ${(props) => props.width + "px"};
   height: ${(props) => props.height + "px"};
   border-radius: 20px;
   background-color: #ffffff;
`;

export const HorizontalCard = styled.TouchableOpacity`
   position: relative;
   padding-top: 24px;
   width: 100%;
   height: ${(props) => props.height + "px"};
   border-radius: 20px;
   background-color: #ffffff;
   margin-bottom: 20px;
`;

export const SubTitleWrapper = styled.View`
   margin-top: 14px;
`;

export const ImageWrapper = styled.View`
   position: absolute;
   bottom: 10px;
   right: 0;
`;
