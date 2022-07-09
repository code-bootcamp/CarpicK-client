import * as R from "react-native";
import * as S from "./PaymentResult.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Button1 from "../../../commons/button/Button1";

export default function PaymentResultPageUI(props) {
   return (
      <>
         <S.Wrapper style={globalStyles.GlobalStyles}></S.Wrapper>
         <Button1 onPress={props.onPressHome}>홈으로</Button1>
      </>
   );
}
