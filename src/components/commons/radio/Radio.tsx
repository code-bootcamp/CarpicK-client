import styled from "@emotion/native";
import { useState } from "react";
import { Dimensions } from "react-native";
import colors from "../../../commons/lib/colors";

interface IRadioProps {
   options: string[];
   onChange: (option: string) => void;
}

const VIEW_WIDTH = Dimensions.get("window").width;

export default function Radio(props: IRadioProps) {
   const [activeOption, setActiveOption] = useState(props.options[0]);

   return (
      <Container>
         {props.options.map((option: string, index: number) => (
            <RadioButton
               key={index}
               activeOpacity={1}
               onPress={() => {
                  props.onChange(option);
                  setActiveOption(option);
               }}
               radioWidth={((VIEW_WIDTH - 50) / props.options.length).toFixed(
                  2
               )}
               isActive={option === activeOption}
            >
               <ButtonText isActive={option === activeOption}>
                  {option}
               </ButtonText>
            </RadioButton>
         ))}
      </Container>
   );
}

const Container = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: center;
   justify-content: space-between;
`;

const RadioButton = styled.TouchableOpacity`
   /* flex: 1; */
   width: ${(props: any) => props.radioWidth}px;
   height: 30px;
   border-radius: 5px;
   background-color: ${(props: any) =>
      props.isActive ? colors.theme : "white"};
   border: ${(props: any) =>
      props.isActive ? "none" : `1px solid ${colors.gray}`};
`;

const ButtonText = styled.Text`
   color: ${(props: any) => (props.isActive ? "white" : colors.gray)};
   font-size: 12px;
   text-align: center;
   line-height: 30px;
`;
