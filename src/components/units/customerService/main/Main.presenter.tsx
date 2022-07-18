import * as S from "./Main.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import MainImage from "../../../../../assets/customerService/main.svg";
import TitleText from "../../../commons/text/TitleText";
export default function MainPageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <S.TitleWrapper>
            <TitleText fontSize="28" color="#5d8bff">
               고객센터
            </TitleText>
         </S.TitleWrapper>
         <S.Menu>
            <S.MenuTouch onPress={props.onPressToUserGuide}>
               <TitleText fontSize="18" color="#353535">
                  CarpicK 이용 가이드
               </TitleText>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToAccident}>
               <TitleText fontSize="18" color="#353535">
                  사고 대처 및 보험 적용 안내
               </TitleText>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToReserve}>
               <TitleText fontSize="18" color="#353535">
                  예약 변경 및 예약 취소 / 취소수수료
               </TitleText>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToReturn}>
               <TitleText fontSize="18" color="#353535">
                  반납 가이드
               </TitleText>
            </S.MenuTouch>
         </S.Menu>
         <S.ImageWrapper>
            <MainImage />
         </S.ImageWrapper>
      </S.Wrapper>
   );
}
