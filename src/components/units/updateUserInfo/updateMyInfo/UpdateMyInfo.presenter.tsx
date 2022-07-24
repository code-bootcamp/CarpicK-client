import * as S from "./UpdateMyInfo.styles";
import * as R from "react-native";
import colors from "../../../../commons/lib/colors";
import globalStyle from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import TitleText from "../../../commons/text/TitleText";
import Contents2Text from "../../../commons/text/Contents2Text";
import UpdateUserInfo from "../../../commons/navigationHeader/updateUserInfo/csHeader";
import Button1 from "../../../commons/button/Button1";
import Timer from "../../../commons/timer/timer.container";
import RedoButton from "../../../commons/redoButton/redoButton.container";
import { phoneNumHypen } from "../../../../commons/utilities/phonNumHypen";
import { IUpdateMyInfoUIProps } from "./UpdateMyInfo.types";

export default function UpdateMyInfoUI(props: IUpdateMyInfoUIProps) {
   return (
      <>
         <UpdateUserInfo onPress={props.onPress}>
            회원정보 수정하기
         </UpdateUserInfo>
         <R.ScrollView>
            <S.TopMenu>
               <S.TitleWrapper
                  isSelected={props.isSelected}
                  onPress={() => props.setIsSelected(true)}
               >
                  <TitleText
                     fontSize="14"
                     color={props.isSelected ? "#fff" : "#000"}
                  >
                     전화번호 수정하기
                  </TitleText>
               </S.TitleWrapper>
               <S.TitleWrapper
                  isSelected={!props.isSelected}
                  onPress={() => props.setIsSelected(false)}
               >
                  <TitleText
                     fontSize="14"
                     color={!props.isSelected ? "#fff" : "#000"}
                  >
                     비밀번호 수정하기
                  </TitleText>
               </S.TitleWrapper>
            </S.TopMenu>
            <S.Wrapper style={globalStyle.GlobalStyles40}>
               {props.isSelected && (
                  <S.PhoneNumber>
                     <Contents1Text fontSize="12" color={colors.black}>
                        전화번호
                     </Contents1Text>
                     <S.PhoneNumberInputWrapper>
                        <S.PhoneNumberInput
                           maxLength={13}
                           keyboardType="numeric"
                           onChangeText={(text) => props.setPhone(text)}
                           placeholder="변경할 번호를 입력해 주세요."
                           style={{ includeFontPadding: false }}
                           value={phoneNumHypen(props.phone)}
                           editable={props.isEditable}
                        />
                        {!props.openTimer && !props.openRedo && (
                           <S.CheckTouch
                              activeOpacity={0.7}
                              onPress={props.onPressSMS}
                           >
                              <Contents1Text fontSize="12" color="#ffffff">
                                 인증요청
                              </Contents1Text>
                           </S.CheckTouch>
                        )}
                        {props.openTimer && (
                           <Timer
                              setOpenTimer={props.setOpenTimer}
                              setOpenRedo={props.setOpenRedo}
                              setToken={props.setToken}
                           />
                        )}
                        {props.openRedo && (
                           <RedoButton setOpenRedo={props.setOpenRedo} />
                        )}
                     </S.PhoneNumberInputWrapper>
                     <S.TokenInputWrapper>
                        <S.TokenInput
                           maxLength={6}
                           keyboardType="numeric"
                           onChangeText={(text) => props.setToken(text)}
                           placeholder="인증번호 입력"
                           style={{ includeFontPadding: false }}
                        />
                        <S.CheckTouch
                           activeOpacity={0.7}
                           onPress={props.onPressCheckPhoneTruthNum}
                        >
                           <Contents1Text fontSize="12" color="#ffffff">
                              확인
                           </Contents1Text>
                        </S.CheckTouch>
                     </S.TokenInputWrapper>
                  </S.PhoneNumber>
               )}
               {!props.isSelected && (
                  <S.Password>
                     <Contents1Text fontSize="12" color={colors.black}>
                        비밀번호
                     </Contents1Text>
                     <S.PasswordInputWrapper>
                        <S.PasswordInput
                           maxLength={16}
                           onChangeText={props.onChangePassword}
                           secureTextEntry={true}
                           placeholder="변경할 비밀번호를 입력해 주세요."
                           style={{ includeFontPadding: false }}
                        />
                     </S.PasswordInputWrapper>
                     {!props.isValidPassword && (
                        <Contents2Text color="#ff6347">
                           영문+숫자 조합 8~16자리를 입력해주세요.
                        </Contents2Text>
                     )}
                     {props.isValidPassword && (
                        <Contents2Text color="#00C73C">
                           알맞은 비밀번호입니다 : )
                        </Contents2Text>
                     )}
                     <S.PassWordCheckInputWrapper>
                        <S.PasswordCheckInput
                           maxLength={16}
                           onChangeText={(text) => props.setPasswordAgain(text)}
                           secureTextEntry={true}
                           placeholder="변경할 비밀번호룰 다시 입력해 주세요."
                           style={{ includeFontPadding: false }}
                        />
                     </S.PassWordCheckInputWrapper>
                  </S.Password>
               )}
            </S.Wrapper>
         </R.ScrollView>
         <Button1
            isDisabled={
               props.isSelected
                  ? !props.isValidPhone
                  : !props.isValidPassword || !props.passwordAgain
            }
            onPress={
               props.isSelected
                  ? props.onPressChangePhoneNum
                  : props.onPressChangePwd
            }
         >
            변경사항 적용
         </Button1>
      </>
   );
}
