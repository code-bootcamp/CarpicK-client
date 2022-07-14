import * as S from "./RentHistoryNone.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import RentHistoryNoneImg from "../../../../assets/rentHistory/rent-history-none.svg";
import colors from "../../../commons/lib/colors";

export default function RentHistoryNoneUI() {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <S.TitleWrapper>
            <TitleText fontSize="28" color={colors.theme}>
               이용내역
            </TitleText>
         </S.TitleWrapper>
         <S.ContentWrapper>
            <Contents1Text fontSize="17" color={colors.dark_gray}>
               이용내역이 없습니다.
            </Contents1Text>
         </S.ContentWrapper>
         <S.ImageWrapper>
            <RentHistoryNoneImg></RentHistoryNoneImg>
         </S.ImageWrapper>
      </S.Wrapper>
   );
}
