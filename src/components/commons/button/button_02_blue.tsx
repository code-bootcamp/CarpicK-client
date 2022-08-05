import styled from "@emotion/native";

interface IButton02blueProps {
   func?: () => void;
   title?: string;
}

export default function Button02Blue(props: IButton02blueProps) {
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
   background-color: #5d8bff;
   border-radius: 5px;
   align-items: center;
   justify-content: center;
`;

export const NextText = styled.Text`
   font-family: Regular;
   color: #ffffff;
`;
