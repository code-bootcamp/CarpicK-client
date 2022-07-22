import styled from "@emotion/native";

interface IButton02GrayProps {
   func?: () => void;
   title?: string;
}

export default function Button02Gray(props: IButton02GrayProps) {
   return (
      <NextTouch activeOpacity={0.7} onPress={props.func}>
         <NextText style={{ includeFontPadding: false }}>
            {props.title}
         </NextText>
      </NextTouch>
   );
}

export const NextTouch = styled.TouchableOpacity`
   width: 100%;
   height: 40px;
   background-color: #a5a5a5;
   border-radius: 5px;
   align-items: center;
   justify-content: center;
`;

export const NextText = styled.Text`
   font-family: Regular;
   color: #ffffff;
`;
