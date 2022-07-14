import * as R from "react-native";
import * as S from "./Filter.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import MultiRadio from "../../../commons/radio/MultiRadio";
import SubTitleText from "../../../commons/text/SubTitleText";
import { IFilterUIProps } from "./Filter.types";
import TitleText from "../../../commons/text/TitleText";
import Button1 from "../../../commons/button/Button1";

export default function FilterUI(props: IFilterUIProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View style={{ marginTop: 30 }}>
               <TitleText fontSize="17" fontFamily="Regular">
                  {`선택하신 차종이 포함된\n카픽존을 보실 수 있습니다!`}
               </TitleText>
               <R.View>
                  <MultiRadio
                     data={props.data?.fetchCarCategory}
                     onChange={props.onChangeSelectedCar}
                  />
               </R.View>
            </R.View>
         </S.Container>
         <Button1
            isDisabled={props.selectedCar.length === 0}
            onPress={props.onPressSelected}
         >
            {props.selectedCar.length}개 차종 선택하기
         </Button1>
      </S.Wrapper>
   );
}
