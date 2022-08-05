import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";
import { ActivityIndicator, Dimensions } from "react-native";

export default function LoadingCircle() {
   return (
      <Wrapper>
         <ActivityIndicator size="large" color={colors.theme} />
      </Wrapper>
   );
}

const Wrapper = styled.View`
   width: ${Dimensions.get("window").width}px;
   height: ${Dimensions.get("window").height}px;
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   justify-content: center;
   align-items: center;
   background-color: rgba(0, 0, 0, 0.65);
   z-index: 1;
`;
