import * as R from "react-native";
import * as S from "./Join.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import Contents2Text from "../../commons/text/Contents2Text";
import { phoneNumHypen } from "../../../commons/utilities/phonNumHypen";
import { Controller } from "react-hook-form";
import Button1 from "../../commons/button/Button1";
import Input2 from "../../commons/input/Input2";
import Timer from "../../commons/timer/timer.container";
import RedoButton from "../../commons/redoButton/redoButton.container";
const emailRegExp =
   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;

export default function JoinPageUI(props) {
   return (
      <>
         <S.Wrapper style={globalStyles.GlobalStyles40}>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.TitleWrapper>
                  <TitleText color="#5D8BFF">카픽 </TitleText>
                  <TitleText>회원가입 </TitleText>
               </S.TitleWrapper>
               <S.Body>
                  <S.InputWrapper>
                     <Contents1Text fontSize="12">이메일</Contents1Text>
                     <S.InputRow>
                        <S.InputLeft>
                           <Controller
                              name="email"
                              control={props.control}
                              render={({ onChange }) => (
                                 <Input2
                                    onChangeText={onChange}
                                    placeholder="이메일을 입력해주세요."
                                 />
                              )}
                              rules={{
                                 required: {
                                    value: true,
                                    message:
                                       "(@포함) 이메일 형식으로 입력해주세요.",
                                 },
                                 pattern: {
                                    value: emailRegExp,
                                    message:
                                       "(@포함) 이메일 형식으로 입력해주세요.",
                                 },
                              }}
                           />
                        </S.InputLeft>
                        <S.SubTouch
                           activeOpacity={0.7}
                           onPress={props.onPressCheckEmail}
                           isValidEmail={props.isValidEmail}
                        >
                           <Contents1Text color="#ffffff" fontSize="14">
                              중복확인
                           </Contents1Text>
                        </S.SubTouch>
                     </S.InputRow>
                  </S.InputWrapper>
                  <Contents2Text color="#ff6347">
                     {props.formState.errors.email?.message}
                  </Contents2Text>
                  <S.InputWrapperMarginBtm>
                     <Contents1Text fontSize="12">전화번호</Contents1Text>
                     <S.InputRow>
                        <S.InputLeft>
                           <Controller
                              name="phone"
                              control={props.control}
                              render={({ onChange, value }) => (
                                 <Input2
                                    value={phoneNumHypen(value)}
                                    onChangeText={onChange}
                                    keyboardType="numeric"
                                    maxLength={13}
                                    placeholder="전화번호를 입력해 주세요."
                                 />
                              )}
                              rules={{
                                 required: {
                                    value: true,
                                    message: "전화번호를 입력해주세요",
                                 },
                              }}
                           />
                        </S.InputLeft>
                        {!props.openTimer && !props.openRedo && (
                           <S.SubTouch
                              activeOpacity={0.7}
                              onPress={props.onPressSMS}
                           >
                              <Contents1Text color="#ffffff" fontSize="14">
                                 인증요청
                              </Contents1Text>
                           </S.SubTouch>
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
                     </S.InputRow>
                  </S.InputWrapperMarginBtm>
                  <S.InputWrapperMarginBtm>
                     <Contents1Text fontSize="12">인증번호</Contents1Text>
                     <S.InputRow>
                        <S.InputLeft>
                           <Input2
                              maxLength={6}
                              onChangeText={(text) => props.setToken(text)}
                              placeholder="인증번호를 입력해 주세요."
                              keyboardType="numeric"
                           />
                        </S.InputLeft>
                        <S.SubTouch
                           activeOpacity={0.7}
                           onPress={props.onPressCheckPhoneTruthNum}
                        >
                           <Contents1Text color="#ffffff" fontSize="14">
                              인증확인
                           </Contents1Text>
                        </S.SubTouch>
                     </S.InputRow>
                  </S.InputWrapperMarginBtm>
                  <S.InputWrapperMarginBtm>
                     <Contents1Text fontSize="12">이름</Contents1Text>
                     <Controller
                        name="name"
                        control={props.control}
                        render={({ onChange }) => (
                           <Input2
                              onChangeText={onChange}
                              placeholder="실명을 입력해 주세요."
                           />
                        )}
                        rules={{
                           required: {
                              value: true,
                              message: "",
                           },
                        }}
                     />
                  </S.InputWrapperMarginBtm>
                  <S.InputWrapper>
                     <Contents1Text fontSize="12">비밀번호</Contents1Text>
                     <Controller
                        name="password"
                        control={props.control}
                        render={({ onChange }) => (
                           <Input2
                              onChangeText={onChange}
                              maxLength={16}
                              secureTextEntry={true}
                              placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                           />
                        )}
                        rules={{
                           required: {
                              value: true,
                              message:
                                 "영문+숫자 조합 8~16 자리를 입력해주세요.",
                           },
                           minLength: {
                              value: 8,
                              message:
                                 "영문+숫자 조합 8~16 자리를 입력해주세요.",
                           },
                           pattern: {
                              value: passwordRegExp,
                              message:
                                 "영문+숫자 조합 8~16 자리를 입력해주세요.",
                           },
                        }}
                     />
                  </S.InputWrapper>
                  <Contents2Text color="#ff6347">
                     {props.formState.errors.password?.message}
                  </Contents2Text>
                  <S.InputWrapperMarginBtm>
                     <Contents1Text fontSize="12">
                        비밀번호 재확인
                     </Contents1Text>
                     <Controller
                        name="passwordAgain"
                        control={props.control}
                        render={({ onChange }) => (
                           <Input2
                              onChangeText={onChange}
                              maxLength={16}
                              secureTextEntry={true}
                              placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                           />
                        )}
                     />
                  </S.InputWrapperMarginBtm>
               </S.Body>
            </R.ScrollView>
         </S.Wrapper>
         <Button1
            isDisabled={
               !(
                  props.formState.isValid &&
                  props.isValidEmail &&
                  props.isValidPhone &&
                  props.passwordAgain
               )
            }
            onPress={props.onPressNext}
         >
            다음
         </Button1>
      </>
   );
}
