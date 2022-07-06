import styled from "@emotion/native";

export const NextTouch = styled.TouchableOpacity`
   width: 100%;
   height: 60px;
   background-color: #a5a5a5;
   border-radius: 5px;
   align-items: center;
   justify-content: center;
`;

export const NextText = styled.Text`
   font-family: Regular;
   color: #ffffff;
`;

export default function Button01Gray({ func, title }) {
   return (
      <NextTouch activeOpacity={0.7} onPress={func}>
         <NextText style={{ includeFontPadding: false }}>{title}</NextText>
      </NextTouch>
   );
}
