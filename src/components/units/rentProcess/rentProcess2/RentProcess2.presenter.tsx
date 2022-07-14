import * as R from "react-native";
import * as S from "./RentProcess2.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Button1 from "../../../commons/button/Button1";

export default function RentProcess2PageUI(props) {
   return (
      <>
         <S.Wrapper style={globalStyles.GlobalStyles}></S.Wrapper>
         <Button1 onPress={props.onPressToPayment}>결제</Button1>
      </>
   );
}
