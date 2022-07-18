import * as S from "./RentHistoryNone.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
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
            <TitleText fontSize="18" color={colors.dark_gray}>
               이용내역이 없습니다.
            </TitleText>
         </S.ContentWrapper>
         <S.ImageWrapper>
            <RentHistoryNoneImg></RentHistoryNoneImg>
         </S.ImageWrapper>
      </S.Wrapper>
   );
}
