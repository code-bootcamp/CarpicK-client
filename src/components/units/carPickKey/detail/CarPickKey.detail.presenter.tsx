import * as R from "react-native";
import * as S from "./CarPickKey.detail.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import SubTitleText from "../../../commons/text/SubTitleText";
import colors from "../../../../commons/lib/colors";
import Contents1Text from "../../../commons/text/Contents1Text";
import Contents2Text from "../../../commons/text/Contents2Text";
import Button1 from "../../../commons/button/Button1";
import { ICarPickKeyDetailProps } from "./CarPickKey.detail.types";
import CheckBox1 from "../../../commons/checkbox/CheckBox1";
import calTime from "../../../../commons/lib/calTime";
import dateFormat from "../../../../commons/lib/dateFormat";
import ArrowRight from "../../../../../assets/mypage/ic_arrow_right.svg";

export default function CarPickKeyDetailUI(props: ICarPickKeyDetailProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View style={{ alignItems: "center" }}>
               <S.CarImage
                  resizeMode="contain"
                  source={{
                     uri: `https://storage.googleapis.com/${props.data?.fetchLoginUser.reservation[0].car.imageCar[0].url}`,
                  }}
               />
               <TitleText fontSize="20">
                  {props.data?.fetchLoginUser.reservation[0].car.carNumber}
               </TitleText>
               <SubTitleText color={colors.gray}>
                  {props.data?.fetchLoginUser.reservation[0].car.carModel.name}
               </SubTitleText>
            </R.View>
            <R.View style={{ marginTop: 30 }}>
               <S.TitleWrapper>
                  <TitleText fontSize="16">이용시간</TitleText>
                  <S.TouchCancel onPress={props.onPressCancelModal}>
                     <Contents1Text fontSize="11" color={colors.gray}>
                        예약취소
                     </Contents1Text>
                     <ArrowRight />
                  </S.TouchCancel>
               </S.TitleWrapper>
               <R.View style={{ marginTop: 5 }}>
                  <Contents1Text fontSize="14">
                     총{" "}
                     {calTime(
                        props.data?.fetchLoginUser.reservation[0].startTime,
                        props.data?.fetchLoginUser.reservation[0].endTime
                     )}{" "}
                     이용
                  </Contents1Text>
                  <Contents1Text fontSize="14" color={colors.gray}>
                     {dateFormat(
                        props.data?.fetchLoginUser.reservation[0].startTime
                     )}{" "}
                     ~{" "}
                     {dateFormat(
                        props.data?.fetchLoginUser.reservation[0].endTime
                     )}
                  </Contents1Text>
               </R.View>
            </R.View>
            <R.View style={{ marginTop: 25 }}>
               <TitleText fontSize="16">차량 대여/반납 장소</TitleText>
               <R.View style={{ marginTop: 5 }}>
                  <S.BodyPlace>
                     <S.PlaceLabel backgroundColor={colors.theme}>
                        <Contents2Text color="#fff">대여</Contents2Text>
                     </S.PlaceLabel>
                     <Contents2Text>지벨리 주차장</Contents2Text>
                  </S.BodyPlace>
                  <S.BodyPlace>
                     <S.PlaceLabel backgroundColor={colors.theme_dark}>
                        <Contents2Text color="#fff">반납</Contents2Text>
                     </S.PlaceLabel>
                     <Contents2Text>지벨리 주차장</Contents2Text>
                  </S.BodyPlace>
               </R.View>
            </R.View>
            <R.View style={{ marginTop: 25 }}>
               <CheckBox1
                  onChange={props.onChangeCheck}
                  checked={props.isChecked}
                  contents="예약 상세정보에 문제가 없을을 확인했습니다."
               />
            </R.View>
         </S.Container>
         <Button1 isDisabled={!props.isChecked} onPress={props.onPressNext}>
            차량 인수 사진 촬영하기
         </Button1>
      </S.Wrapper>
   );
}
