import * as R from "react-native";
import * as S from "./RentProcess1.styles";
import Contents1Text from "../../../commons/text/Contents1Text";
import SubTitleText from "../../../commons/text/SubTitleText";
import Contents2Text from "../../../commons/text/Contents2Text";
import TitleText from "../../../commons/text/TitleText";
import colors from "../../../../commons/lib/colors";
import Radio2 from "../../../commons/radio/Radio2";
import { numberWithCommas } from "../../../../commons/utilities/numberWithCommas";

export default function RentProcess1PageUI(props) {
   return (
      <>
         <S.Wrapper>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.HeaderWrapper>
                  <S.CarImage
                     source={{
                        uri: `https://storage.googleapis.com/${props.data?.fetchCar.imageCar[0].url}`,
                     }}
                     resizeMode="contain"
                  />
                  <SubTitleText>
                     {props.data?.fetchCar.carModel.name}
                  </SubTitleText>
                  <S.TextWrapper>
                     <Contents1Text fontSize="14">주행요금</Contents1Text>
                     <Contents1Text fontSize="14" color={colors.theme}>
                        {"    200~260원 / km"}
                     </Contents1Text>
                  </S.TextWrapper>
               </S.HeaderWrapper>
               <S.PlaceWrapper>
                  <S.TitleWrapper>
                     <SubTitleText>차량 대여/반납 장소</SubTitleText>
                  </S.TitleWrapper>
                  <S.BodyRentPlace>
                     <S.RentLabel>
                        <Contents2Text color="#fff">대여</Contents2Text>
                     </S.RentLabel>
                     <Contents2Text>
                        {props.data?.fetchCar.carLocation.addressDetail}
                     </Contents2Text>
                  </S.BodyRentPlace>
                  <S.BodyReturnPlace>
                     <S.ReturnLabel>
                        <Contents2Text color="#fff">반납</Contents2Text>
                     </S.ReturnLabel>
                     <Contents2Text>
                        {props.data?.fetchCar.carLocation.addressDetail}
                     </Contents2Text>
                  </S.BodyReturnPlace>
               </S.PlaceWrapper>
               <S.TimeWrapper>
                  <S.TitleWrapper>
                     <SubTitleText>이용시간</SubTitleText>
                     <S.TouchTimeChange
                        activeOpacity={0.5}
                        onPress={() => props.setIsVisible(true)}
                     >
                        <Contents1Text color={colors.gray}>
                           변경하기
                        </Contents1Text>
                     </S.TouchTimeChange>
                  </S.TitleWrapper>
                  <S.TimeTextWrapper>
                     <Contents1Text>
                        총 {props.finalHour}시간{" "}
                        {props.finalMin !== 0 && String(props.finalMin) + "분"}{" "}
                        이용
                     </Contents1Text>
                     <Contents1Text fontSize="18" color={colors.dark_gray}>
                        {props.startTime + "~" + props.endTime}
                     </Contents1Text>
                  </S.TimeTextWrapper>
               </S.TimeWrapper>
               <S.InsuranceWrapper>
                  <S.TitleWrapper>
                     <SubTitleText fontSize="14">자동차종합보험</SubTitleText>
                  </S.TitleWrapper>
                  <S.InsuranceTextWrapper>
                     <Contents2Text color={colors.gray}>
                        카픽의 모든 차량은 차량손해면책 외 자손/대인/대물의
                        피해를 보상하는 자동차 종합보험에 가입되어 있습니다.
                     </Contents2Text>
                  </S.InsuranceTextWrapper>
                  <S.TitleWrapper>
                     <SubTitleText fontSize="14">
                        차량손해면책 상품
                     </SubTitleText>
                  </S.TitleWrapper>
                  <S.InsuranceTextWrapper>
                     <Contents2Text color={colors.gray}>
                        운행 중 사고로 인하여 카픽 차량을 수리할 경우, 회원님의
                        자기부담금(사고시 부담해야 할 최대 한도 금액)을
                        선택하세요.
                     </Contents2Text>
                  </S.InsuranceTextWrapper>
                  <S.RadioWrapper>
                     <S.RadioLeft>
                        <Radio2
                           value="first"
                           checked={props.checked}
                           setChecked={props.setChecked}
                        />
                        <R.TouchableOpacity
                           onPress={() => props.setChecked("first")}
                        >
                           <Contents1Text>자기부담금 최대 5만원</Contents1Text>
                        </R.TouchableOpacity>
                     </S.RadioLeft>
                     <Contents1Text>
                        +{numberWithCommas(Math.ceil(props.price * 2))}원
                     </Contents1Text>
                  </S.RadioWrapper>
                  <S.RadioWrapper>
                     <S.RadioLeft>
                        <Radio2
                           value="second"
                           checked={props.checked}
                           setChecked={props.setChecked}
                        />
                        <R.TouchableOpacity
                           onPress={() => props.setChecked("second")}
                        >
                           <Contents1Text>자기부담금 최대 30만원</Contents1Text>
                        </R.TouchableOpacity>
                     </S.RadioLeft>
                     <Contents1Text>
                        +{numberWithCommas(Math.ceil(props.price))}원
                     </Contents1Text>
                  </S.RadioWrapper>
                  <S.RadioWrapper>
                     <S.RadioLeft>
                        <Radio2
                           value="third"
                           checked={props.checked}
                           setChecked={props.setChecked}
                        />
                        <R.TouchableOpacity
                           onPress={() => props.setChecked("third")}
                        >
                           <Contents1Text>자기부담금 최대 70만원</Contents1Text>
                        </R.TouchableOpacity>
                     </S.RadioLeft>
                     <Contents1Text>
                        +{numberWithCommas(Math.ceil(props.price / 2))}원
                     </Contents1Text>
                  </S.RadioWrapper>
               </S.InsuranceWrapper>
            </R.ScrollView>
         </S.Wrapper>
         <S.ButtonWrapper>
            <S.ButtonTextLeftWrapper>
               <SubTitleText>
                  총 {numberWithCommas(props.totalPrice)}원
               </SubTitleText>
               <Contents2Text>대여요금 + 면책상품 요금</Contents2Text>
            </S.ButtonTextLeftWrapper>
            <S.ButtonNext onPress={props.onPressNext}>
               <Contents1Text color="#ffffff" fontSize="14">
                  다음
               </Contents1Text>
            </S.ButtonNext>
         </S.ButtonWrapper>
      </>
   );
}
