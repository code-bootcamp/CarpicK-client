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
   shadow-opacity: 0.2;
   shadow-radius: 1.41px;
   shadow-color: #000;
   shadow-offset: 0px 1px;
   elevation: 2;
`;

export const HorizontalCard = styled.TouchableOpacity`
   position: relative;
   padding-top: 24px;
   width: 100%;
   height: ${(props) => props.height + "px"};
   border-radius: 20px;
   background-color: #ffffff;
   margin-bottom: 20px;
   shadow-opacity: 0.2;
   shadow-radius: 1.41px;
   shadow-color: #000;
   shadow-offset: 0px 1px;
   elevation: 2;
`;

export const SubTitleWrapper = styled.View`
   margin-top: 14px;
`;

export const ImageWrapper = styled.View`
   position: absolute;
   bottom: 10px;
   right: 0;
`;

export const ImageWrapperGap = styled.View`
   position: absolute;
   bottom: 10px;
   right: 5px;
`;

export const IconWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   padding: 0px 30px;
`;

export const HorizontalCardView = styled.View`
   position: relative;
   padding-top: 24px;
   width: 100%;
   height: ${(props) => props.height + "px"};
   border-radius: 20px;
   background-color: #ffffff;
   margin-bottom: 20px;
   shadow-opacity: 0.2;
   shadow-radius: 1.41px;
   shadow-color: #000;
   shadow-offset: 0px 1px;
   elevation: 2;
`;

export const IconTouch = styled.TouchableOpacity`
   align-items: center;
`;

/* shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4, */
