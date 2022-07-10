import * as S from "./FindId.styles";
import TitleText from "../../commons/text/TitleText";
import globalStyles from "../../../commons/styles/globalStyle";
import Contents1Text from "../../commons/text/Contents1Text";
import { phoneNumHypen } from "../../../commons/utilities/phonNumHypen";
import Button01Blue from "../../commons/button/button_01_blue";

export default function FindIdPageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <S.TitleWrapper>
            <TitleText color="#5D8BFF">아이디찾기</TitleText>
         </S.TitleWrapper>
         <S.InputWrapperMarginBtm>
            <Contents1Text fontSize="14">전화번호</Contents1Text>
            <S.InputRow>
               <S.InputLeft>
                  <S.Input
                     maxLength={13}
                     keyboardType="numeric"
                     onChange={props.onChanePhone}
                     placeholder="휴대전화번호 입력."
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
                     keyboardType="numeric"
                     onChange={props.onChanePhoneTruthNum}
                     placeholder="인증번호를 입력해 주세요."
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
         <S.ButtonWrapper>
            <Button01Blue
               func={props.onPressToIdResult}
               title={"아이디 찾기"}
            />
         </S.ButtonWrapper>
      </S.Wrapper>
   );
}
