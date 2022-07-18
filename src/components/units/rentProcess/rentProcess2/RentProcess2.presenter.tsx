import * as R from "react-native";
import * as S from "./RentProcess2.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Button1 from "../../../commons/button/Button1";
import SubTitleText from "../../../commons/text/SubTitleText";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";
import Contents1Text from "../../../commons/text/Contents1Text";
import Contents2Text from "../../../commons/text/Contents2Text";
import colors from "../../../../commons/lib/colors";
import TitleText from "../../../commons/text/TitleText";
import CheckBox1 from "../../../commons/checkbox/CheckBox1";
import CheckBox2 from "../../../commons/checkbox/CheckBox2";

export default function RentProcess2PageUI(props) {
   return (
      <>
         <S.Wrapper>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.HeaderWrapper>
                  <S.TitleWrapper>
                     <SubTitleText>상세요금</SubTitleText>
                  </S.TitleWrapper>
                  <S.ContentsWrapper>
                     <Contents1Text color={colors.gray}>대여요금</Contents1Text>
                     <Contents1Text color={colors.gray}>
                        {numberWithCommas(props.rentPrice)}원
                     </Contents1Text>
                  </S.ContentsWrapper>
                  <S.ContentsWrapper>
                     <Contents1Text color={colors.gray}>
                        면책상품 요금
                     </Contents1Text>
                     <Contents1Text color={colors.gray}>
                        {numberWithCommas(props.insuPrice)}원
                     </Contents1Text>
                  </S.ContentsWrapper>
               </S.HeaderWrapper>
               <S.PriceWrapper>
                  <S.ContentsWrapper>
                     <SubTitleText>총 결제 금액</SubTitleText>
                     <TitleText color={colors.theme} fontSize="18">
                        {numberWithCommas(props.totalPrice)}원
                     </TitleText>
                  </S.ContentsWrapper>
               </S.PriceWrapper>
               <S.FooterWrapper>
                  <SubTitleText>예약 전 주의사항</SubTitleText>
                  <S.ContentsTextWrapper>
                     <Contents1Text>
                        {
                           "취소 시점에 따라 취소 수수료나 페널티가 생길 수있습니다. \n반납 시간을 초과할 경우 페널티가 생길 수 있습니다. \n동승운전자는 대여 시작 시간 10분 전까지만 등록할 수 있습니다."
                        }
                     </Contents1Text>
                  </S.ContentsTextWrapper>
                  <R.View style={{ marginTop: 15 }}>
                     <SubTitleText>약관 및 이용 안내 동의</SubTitleText>
                     <S.CheckBoxWrapper>
                        <CheckBox1
                           onChange={props.onChangeCheck}
                           contents="예약 정보 확인 및 모든 약관에 동의합니다."
                        />
                        <CheckBox2
                           onChange={props.onChangeCheck}
                           contents="[필수] 카픽 자동차대여약관"
                        />
                        <CheckBox2
                           onChange={props.onChangeCheck}
                           contents="[필수] 카픽 차량손해면책제도 이용약관"
                        />
                        <CheckBox2
                           onChange={props.onChangeCheck}
                           contents="[필수] 개인정보 수집 및 이용 동의"
                        />
                     </S.CheckBoxWrapper>
                  </R.View>
               </S.FooterWrapper>
            </R.ScrollView>
         </S.Wrapper>
         <Button1 onPress={props.onPressToPayment}>
            총 {numberWithCommas(props.totalPrice)}원 예약하기
         </Button1>
      </>
   );
}
