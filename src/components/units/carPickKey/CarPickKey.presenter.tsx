import * as R from "react-native";
import * as S from "./CarPickKey.styles";
import ArrowBack from "../../../../assets/carPickKey/ic_back_arrow.svg";
import UnlockIcon from "../../../../assets/carPickKey/ic_unlock.svg";
import LockIcon from "../../../../assets/carPickKey/ic_lock.svg";
import globalStyle from "../../../commons/styles/globalStyle";
import Contents1Text from "../../commons/text/Contents1Text";
import colors from "../../../commons/lib/colors";
import { ICarPickKeyUIProps } from "./CarPickKey.types";

export default function CarPickKeyUI(props: ICarPickKeyUIProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <S.Header>
               <S.ArrowBackButton
                  activeOpacity={0.7}
                  onPress={props.onPressBack}
               >
                  <ArrowBack />
               </S.ArrowBackButton>
               <S.TitleText>CarpicKey</S.TitleText>
            </S.Header>
            <R.View>
               <S.CarInfoContainer>
                  <R.View>
                     <Contents1Text
                        fontFamily="Bold"
                        fontSize="14"
                        color="white"
                     >
                        남은 대여시간
                     </Contents1Text>
                     <Contents1Text fontSize="14" color="white">
                        08:26
                     </Contents1Text>
                  </R.View>
                  <S.CarNumberBox>
                     <Contents1Text
                        fontFamily="Bold"
                        fontSize="14"
                        color="white"
                     >
                        차량번호
                     </Contents1Text>
                     <Contents1Text fontSize="14" color="white">
                        44호 0541
                     </Contents1Text>
                  </S.CarNumberBox>
               </S.CarInfoContainer>
               <S.KeyButtonContainer>
                  <R.View style={{ alignItems: "center" }}>
                     <S.ButtonStrokeView
                        activeOpacity={0.7}
                        onPress={props.onPressUnlock}
                     >
                        <UnlockIcon />
                     </S.ButtonStrokeView>
                     <R.View style={{ marginTop: 5 }}>
                        <Contents1Text
                           color="white"
                           fontSize="16"
                           fontFamily="Bold"
                        >
                           문열림
                        </Contents1Text>
                     </R.View>
                  </R.View>
                  <R.View style={{ alignItems: "center" }}>
                     <S.ButtonStrokeView
                        activeOpacity={0.7}
                        onPress={props.onPressLock}
                     >
                        <LockIcon />
                     </S.ButtonStrokeView>
                     <R.View style={{ marginTop: 5 }}>
                        <Contents1Text
                           color="white"
                           fontSize="16"
                           fontFamily="Bold"
                        >
                           문잠금
                        </Contents1Text>
                     </R.View>
                  </R.View>
               </S.KeyButtonContainer>
               <S.ReturnButton
                  activeOpacity={0.7}
                  onPress={props.onPressReturn}
               >
                  <Contents1Text
                     color={colors.theme}
                     fontSize="14"
                     fontFamily="Bold"
                  >
                     차량 반납하기
                  </Contents1Text>
               </S.ReturnButton>
            </R.View>
         </S.Container>
      </S.Wrapper>
   );
}
