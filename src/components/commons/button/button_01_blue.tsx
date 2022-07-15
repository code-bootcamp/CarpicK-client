import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const NextTouch = styled.TouchableOpacity`
   width: 100%;
   height: 60px;
   background-color: ${(props) => (props.disabled ? colors.gray : "#5D8BFF")};
   border-radius: 5px;
   align-items: center;
   justify-content: center;
`;

export const NextText = styled.Text`
   font-family: Regular;
   color: #ffffff;
`;

export default function Button01Blue({ func, title, disabled }) {
   return (
      <NextTouch
         activeOpacity={0.7}
         onPress={func}
         disabled={disabled || false}
      >
         <NextText style={{ includeFontPadding: false }}>{title}</NextText>
      </NextTouch>
   );
}
