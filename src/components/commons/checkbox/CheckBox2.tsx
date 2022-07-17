import styled from "@emotion/native";
import * as R from "react-native";
import { useEffect, useState } from "react";
import CheckBoxInActiveIcon from "../../../../assets/checkbox/checkbox2/ic_check_in_active.svg";
import CheckBoxActiveIcon from "../../../../assets/checkbox/checkbox2/ic_check_active.svg";

interface ICheckBox2 {
   onChange: (isChecked: boolean) => void;
   contents: string;
}

export default function CheckBox2(props: ICheckBox2) {
   const [isChecked, setIsChecked] = useState(false);

   const onPressCheck = () => {
      setIsChecked((prev) => !prev);
   };

   useEffect(() => {
      props.onChange(isChecked);
   }, [isChecked]);

   return (
      <Container activeOpacity={1} onPress={onPressCheck}>
         <CheckBoxContainer>
            {isChecked ? <CheckBoxActiveIcon /> : <CheckBoxInActiveIcon />}
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
`;

const ContentsText = styled.Text`
   margin-top: ${(props: { os: string }) => (props.os === "ios" ? "5" : "3")}px;
   margin-left: 10px;
   font-size: 13px;
   color: black;
`;
