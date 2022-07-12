import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
`;

export const Container = styled.View`
   background-color: ${colors.theme};
`;

export const Header = styled.View`
   height: 50px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
`;

export const ArrowBackButton = styled.View`
   position: absolute;
   left: 0;
`;

export const TitleText = styled.Text`
   font-size: 18px;
   font-weight: bold;
   color: white;
`;

export const CarInfoContainer = styled.View`
   flex-direction: row;
   justify-content: space-between;
`;

export const CarNumberBox = styled.View`
   align-items: flex-end;
`;

export const KeyButtonContainer = styled.View`
   flex-direction: row;
   justify-content: center;
   margin-top: 40px;
`;

export const ButtonStrokeView = styled.TouchableOpacity`
   height: 130px;
   width: 130px;
   justify-content: center;
   align-items: center;
   border: 5px solid white;
   border-radius: 15px;
   margin: 0 15px;
`;

export const ReturnButton = styled.TouchableOpacity`
   width: 290px;
   height: 50px;
   justify-content: center;
   align-items: center;
   margin: 50px auto;
   background-color: white;
   border-radius: 5px;
`;
