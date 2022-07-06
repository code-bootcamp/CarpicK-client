import * as R from "react-native";
import * as S from "./Main.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import MainImage from "../../../../../assets/customerService/main.svg";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
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
               <Contents1Text fontSize="17" color="#353535">
                  CarpicK 이용 가이드
               </Contents1Text>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToAccident}>
               <Contents1Text fontSize="17" color="#353535">
                  사고 대처 및 보험 적용 안내
               </Contents1Text>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToReserve}>
               <Contents1Text fontSize="17" color="#353535">
                  예약 변경 및 예약 취소 / 취소수수료
               </Contents1Text>
            </S.MenuTouch>
            <S.MenuTouch onPress={props.onPressToReturn}>
               <Contents1Text fontSize="17" color="#353535">
                  반납 가이드
               </Contents1Text>
            </S.MenuTouch>
         </S.Menu>
         <S.ImageWrapper>
            <MainImage />
         </S.ImageWrapper>
      </S.Wrapper>
   );
}
