import styled from "@emotion/native";
import * as R from "react-native";
import { useEffect, useState } from "react";
import CheckBoxIcon from "../../../../assets/checkbox/checkbox1/ic_check.svg";
import colors from "../../../commons/lib/colors";

interface ICheckBox1 {
   onChange: (isChecked: boolean) => void;
   checked: boolean;
   contents: string;
}

export default function CheckBox1(props: ICheckBox1) {
   const [isChecked, setIsChecked] = useState(false);

   const onPressCheck = () => {
      setIsChecked((prev) => !prev);
   };

   useEffect(() => {
      props.onChange(isChecked);
   }, [isChecked]);

   return (
      <Container activeOpacity={1} onPress={onPressCheck}>
         <CheckBoxContainer isChecked={props.checked}>
            <CheckBoxIcon />
         </CheckBoxContainer>
         <ContentsText os={R.Platform.OS}>{props.contents}</ContentsText>
      </Container>
   );
}

const Container = styled.TouchableOpacity`
   flex-direction: row;
   align-items: flex-start;
   margin: 2.5px 0;
   margin-right: 35px;
`;

const CheckBoxContainer = styled.View`
   width: 25px;
   height: 25px;
   justify-content: center;
   align-items: center;
   border-radius: 13px;
   background-color: ${(props: { isChecked: boolean }) =>
      props.isChecked ? colors.theme : colors.gray};
`;

const ContentsText = styled.Text`
   margin-top: ${(props: { os: string }) => (props.os === "ios" ? "5" : "3")}px;
   margin-left: 10px;
   font-size: 13px;
   color: black;
`;
