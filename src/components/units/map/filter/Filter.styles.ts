import styled from "@emotion/native";
import colors from "../../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
   background-color: white;
`;

export const Header = styled.View`
   height: 50px;
   align-items: center;
   justify-content: center;
   border-bottom-width: 0.7px;
   border-bottom-color: ${colors.light_gray};
`;

export const ArrowBox = styled.TouchableOpacity`
   position: absolute;
   left: 20px;
`;

export const ResetBox = styled.TouchableOpacity`
   position: absolute;
   right: 20px;
`;

export const Container = styled.ScrollView`
   background-color: white;
`;
