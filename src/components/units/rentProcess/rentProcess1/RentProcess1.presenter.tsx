import * as R from "react-native";
import * as S from "./RentProcess1.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Button1 from "../../../commons/button/Button1";
import Contents1Text from "../../../commons/text/Contents1Text";
import SubTitleText from "../../../commons/text/SubTitleText";
import Contents2Text from "../../../commons/text/Contents2Text";
import TitleText from "../../../commons/text/TitleText";
import colors from "../../../../commons/lib/colors";

export default function RentProcess1PageUI(props) {
   return (
      <>
         <S.Wrapper>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.HeaderWrapper>
                  <S.CarImage
                     source={{
                        uri: "https://storage.googleapis.com/carpick_bucket/dog.png",
                     }}
                     resizeMode="center"
                  />
                  <SubTitleText fontSize="14">
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
                     <SubTitleText fontSize="14">
                        차량 대여/반납 장소
                     </SubTitleText>
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
                     <SubTitleText fontSize="14">이용시간</SubTitleText>
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
            </R.ScrollView>
         </S.Wrapper>
         <S.ButtonWrapper>
            <S.ButtonTextLeftWrapper>
               <SubTitleText>총 {"0"}원</SubTitleText>
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
