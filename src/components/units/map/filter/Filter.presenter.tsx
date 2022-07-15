import * as R from "react-native";
import * as S from "./Filter.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import MultiRadio from "../../../commons/radio/MultiRadio";
import { IFilterUIProps } from "./Filter.types";
import TitleText from "../../../commons/text/TitleText";
import Button1 from "../../../commons/button/Button1";
import BackArrow from "../../../../../assets/filter/ic_back_arrow.svg";
import Contents1Text from "../../../commons/text/Contents1Text";
import colors from "../../../../commons/lib/colors";

export default function FilterUI(props: IFilterUIProps) {
   return (
      <S.Wrapper>
         <S.Header>
            <S.ArrowBox activeOpacity={0.7} onPress={props.onPressBack}>
               <BackArrow />
            </S.ArrowBox>
            <TitleText fontSize="15">차종 필터</TitleText>
            <S.ResetBox
               disabled={props.selectedCar.length === 0}
               activeOpacity={0.7}
               onPress={props.onPressReset}
            >
               <Contents1Text
                  color={
                     props.selectedCar.length > 0
                        ? colors.theme
                        : colors.light_gray
                  }
                  fontSize="14"
               >
                  초기화
               </Contents1Text>
            </S.ResetBox>
         </S.Header>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View style={{ marginTop: 30 }}>
               <TitleText fontSize="17" fontFamily="Regular">
                  {`선택하신 차종이 포함된\n카픽존을 보실 수 있습니다!`}
               </TitleText>
            </R.View>
            {props.data?.fetchCarCategory.length !== 0 ? (
               <R.View>
                  <MultiRadio
                     ref={props.resetRef}
                     data={props.data?.fetchCarCategory}
                     selectedCar={props.selectedCar}
                     PSelectedCar={props.PSelectedCar}
                     onChange={props.onChangeSelectedCar}
                  />
               </R.View>
            ) : (
               <S.EmptyDataContainer>
                  <TitleText fontFamily="Regular" fontSize="17" color="#e0e0e0">
                     차량 카테고리가 없습니다
                  </TitleText>
               </S.EmptyDataContainer>
            )}
         </S.Container>
         <Button1
            isDisabled={props.PSelectedCar === props.selectedCar}
            onPress={props.onPressSelected}
         >
            {props.selectedCar.length}개 차종 선택하기
         </Button1>
      </S.Wrapper>
   );
}
