import * as R from "react-native";
import * as S from "./CarPickKey.using.styles";
import { ICarPickKeyUsingUIProps } from "./CarPickKey.using.types";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import UnlockIcon from "../../../../../assets/carPickKey/using/ic_unlock.svg";
import LockIcon from "../../../../../assets/carPickKey/using/ic_lock.svg";
import globalStyle from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import colors from "../../../../commons/lib/colors";
import Modal3 from "../../../commons/modals/modal3/Modal3";
import SubTitleText from "../../../commons/text/SubTitleText";

export default function CarPickKeyUsingUI(props: ICarPickKeyUsingUIProps) {
   return (
      <>
         <S.Wrapper>
            <S.Container style={globalStyle.GlobalStyles}>
               <S.Header>
                  <S.ArrowBackButton>
                     <Ionicons
                        name={
                           Platform.OS === "ios"
                              ? "ios-arrow-back"
                              : "md-arrow-back"
                        }
                        size={Platform.OS === "ios" ? 35 : 24}
                        color={"#fff"}
                        style={{
                           fontSize: 32,
                           width: 25,
                        }}
                        onPress={props.onPressToMain}
                     />
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
                        {!props.isDelay && (
                           <Contents1Text fontSize="14" color="white">
                              {props.finalHour}시간{" "}
                              {props.finalMin !== 0 &&
                                 String(props.finalMin) + "분"}
                           </Contents1Text>
                        )}
                        {props.isDelay && (
                           <S.DelayWrapper>
                              <SubTitleText fontSize="14" color={colors.red}>
                                 반납지연
                              </SubTitleText>
                           </S.DelayWrapper>
                        )}
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
                           {
                              props.data?.fetchLoginUser.reservation[0].car
                                 .carNumber
                           }
                        </Contents1Text>
                     </S.CarNumberBox>
                  </S.CarInfoContainer>
                  <S.KeyButtonContainer>
                     <R.View style={{ alignItems: "center" }}>
                        <S.ButtonStrokeView
                           activeOpacity={0.7}
                           onPress={props.onChangeOpenDoor}
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
                           onPress={props.onChangeCloseDoor}
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
         {props.openDoor && (
            <Modal3
               contents="문이 열렸습니다"
               positiveText="확인"
               positive={props.onChangeOpenDoor}
            />
         )}
         {props.closeDoor && (
            <Modal3
               contents="문이 잠겼습니다."
               positiveText="확인"
               positive={props.onChangeCloseDoor}
            />
         )}
      </>
   );
}
