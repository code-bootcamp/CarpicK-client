import styled from "@emotion/native";
import { Camera } from "expo-camera";

export const Wrapper = styled.View`
   flex: 1;
`;

export const MyCamera = styled(Camera)`
   flex: 1;
   width: 100%;
   justify-content: flex-end;
   align-items: center;
   position: relative;
`;

export const Header = styled.View`
   width: 100%;
   height: 110px;
   background-color: #000000;
`;

export const Footer = styled.View`
   width: 100%;
   height: 150px;
   background-color: #000000;
   justify-content: center;
`;

export const ButtonWrapper = styled.View`
   align-items: center;
`;
export const ButtonText = styled.Text`
   color: #f4f833;
   margin-bottom: 10px;
`;
export const ButtonBody = styled.View`
   width: 250px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   position: relative;
`;
export const ButtonUndoText = styled.Text`
   width: 100%;
   color: #ffffff;
`;
export const UndoTouch = styled.TouchableOpacity`
   width: 50px;
   height: 50px;
   position: absolute;
   justify-content: center;
   left: 10px;
`;
export const ButtonTouch = styled.TouchableOpacity`
   width: 70px;
   height: 70px;
   border-radius: 35px;
   background-color: white;
   position: relative;
`;
export const InnerCircle = styled.TouchableOpacity`
   width: 60px;
   height: 60px;
   border-radius: 30px;
   background-color: white;
   border: 1px solid #000000;
   position: absolute;
   top: 5px;
   left: 5px;
   /* elevation: 999; */
`;
export const ScreenTop = styled.View`
   flex: 1;
   justify-content: flex-end;
   position: absolute;
   width: 100%;
   height: 113px;
   top: 0;
   background-color: #a3a3a3;
   opacity: 0.8;
   align-items: center;
`;
export const ScreenBottom = styled.View`
   flex: 1;
   justify-content: flex-end;
   position: absolute;
   width: 100%;
   height: ${(props) => props.height + "px"};
   top: ${(props) => props.top + "px"};
   background-color: #a3a3a3;
   opacity: 0.8;
   align-items: center;
`;
export const ScreenLeft = styled.View`
   width: 50px;
   height: ${(props) => props.height + "px"};
   position: absolute;
   background-color: #a3a3a3;
   opacity: 0.8;
   top: 113px;
   left: 0;
   align-items: center;
`;
export const ScreenRight = styled.View`
   width: 50px;
   height: ${(props) => props.height + "px"};
   position: absolute;
   background-color: #a3a3a3;
   opacity: 0.8;
   top: 113px;
   right: 0;
   align-items: center;
`;

export const GuideScreen = styled.View`
   position: absolute;
   top: 0;
   align-items: center;
   padding-top: 30px;
`;
export const GuideHeader = styled.Text`
   color: #ffffff;
   elevation: 1;
`;

export const GuideFooter = styled.View`
   width: 225px;
   flex-direction: row;
   position: absolute;
   top: ${(props) => props.top + "px"};
   justify-content: space-between;
`;
export const Tip1 = styled.View`
   align-items: center;
`;
export const Tip2 = styled.View`
   align-items: center;
   margin-right: 5px;
`;

export const TipTextWrapper = styled.View`
   align-items: center;
   margin-top: 10px;
`;

export const TipText = styled.Text`
   font-size: 10px;
   color: #ffffff;
   elevation: 1;
`;

export const TouchShield = styled.View`
   width: 100%;
   height: 100%;
   background-color: #a5a5a5;
   opacity: 0.5;
   position: absolute;
   z-index: 999;
   align-items: center;
   justify-content: center;
`;

export const TextMargin = styled.View`
   padding-bottom: 25px;
`;
