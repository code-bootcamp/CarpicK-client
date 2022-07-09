import * as R from "react-native";
import * as S from "./RentProcess1.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Button1 from "../../../commons/button/Button1";

export default function RentProcess1PageUI(props) {
   return (
      <>
         <S.Wrapper style={globalStyles.GlobalStyles}></S.Wrapper>
         <Button1 onPress={props.onPressNext}>다음</Button1>
      </>
   );
}
