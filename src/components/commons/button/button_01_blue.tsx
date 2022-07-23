import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

interface IButtonBlueProps {
   func?: () => void;
   title?: string;
   disabled?: boolean;
}

export default function Button01Blue(props: IButtonBlueProps) {
   return (
      <NextTouch
         activeOpacity={0.7}
         onPress={props.func}
         disabled={props.disabled || false}
      >
         <NextText style={{ includeFontPadding: false }}>
            {props.title}
         </NextText>
      </NextTouch>
   );
}

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
