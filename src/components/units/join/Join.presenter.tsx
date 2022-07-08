import * as R from "react-native";
import * as S from "./Join.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import Button01Blue from "../../commons/button/button_01_blue";
import Contents1Text from "../../commons/text/Contents1Text";
import Contents2Text from "../../commons/text/Contents2Text";
import { phoneNumHypen } from "../../../commons/utilities/phonNumHypen";

export default function JoinPageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.TitleWrapper>
               <TitleText color="#5D8BFF">카픽 </TitleText>
               <TitleText>회원가입 </TitleText>
            </S.TitleWrapper>
            <S.Body>
               <S.InputWrapper>
                  <Contents1Text fontSize="14">이메일</Contents1Text>
                  <S.InputRow>
                     <S.InputLeft>
                        <S.Input
                           onChange={props.onChaneEmail}
                           placeholder="이메일 형식으로 입력해주세요."
                           style={{ includeFontPadding: false }}
                        />
                        <S.InputBottomLine />
                     </S.InputLeft>
                     <S.SubTouch
                        activeOpacity={0.7}
                        onPress={props.onPressCheckEmail}
                     >
                        <Contents1Text color="#ffffff" fontSize="14">
                           중복확인
                        </Contents1Text>
                     </S.SubTouch>
                  </S.InputRow>
               </S.InputWrapper>
               <Contents2Text color="#ff6347">
                  {!props.isValidEmail ? "이메일 형식으로 입력해주세요." : ""}
               </Contents2Text>
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="14">전화번호</Contents1Text>
                  <S.InputRow>
                     <S.InputLeft>
                        <S.Input
                           maxLength={13}
                           onChange={props.onChanePhone}
                           placeholder="전화번호를 입력해 주세요."
                           value={phoneNumHypen(props.phone)}
                        />
                        <S.InputBottomLine />
                     </S.InputLeft>
                     <S.SubTouch
                        activeOpacity={0.7}
                        onPress={props.onPressCheckEmail}
                     >
                        <Contents1Text color="#ffffff" fontSize="14">
                           인증요청
                        </Contents1Text>
                     </S.SubTouch>
                  </S.InputRow>
               </S.InputWrapperMarginBtm>
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="14">인증번호</Contents1Text>
                  <S.InputRow>
                     <S.InputLeft>
                        <S.Input
                           maxLength={6}
                           onChange={props.onChanePhoneTruthNum}
                           placeholder="인증번호를 입력해 주세요."
                           keyboardType="numeric"
                           style={{ includeFontPadding: false }}
                        />
                        <S.InputBottomLine />
                     </S.InputLeft>
                     <S.SubTouch
                        activeOpacity={0.7}
                        onPress={props.onPressCheckEmail}
                     >
                        <Contents1Text color="#ffffff" fontSize="14">
                           인증확인
                        </Contents1Text>
                     </S.SubTouch>
                  </S.InputRow>
               </S.InputWrapperMarginBtm>
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="14">이름</Contents1Text>
                  <S.Input
                     onChange={props.onChaneName}
                     placeholder="실명을 입력해 주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.InputWrapperMarginBtm>
               <S.InputWrapper>
                  <Contents1Text fontSize="14">비밀번호</Contents1Text>
                  <S.Input
                     maxLength={16}
                     onChange={props.onChanePassword}
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.InputWrapper>
               <Contents2Text color="#ff6347">
                  {!props.isValidPassword
                     ? "영문+숫자 조합 8~16자리를 입력해주세요."
                     : ""}
               </Contents2Text>
               <S.InputWrapperMarginBtm>
                  <Contents1Text fontSize="14">비밀번호 재확인</Contents1Text>
                  <S.Input
                     maxLength={16}
                     onChange={props.onChanePasswordAgain}
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.InputWrapperMarginBtm>
               <Button01Blue func={props.onPressNext} title="다음" />
            </S.Body>
         </R.ScrollView>
      </S.Wrapper>
   );
}
