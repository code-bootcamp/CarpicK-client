import * as S from "./UpdateMyInfo.styles";
import * as R from "react-native";
import colors from "../../../../commons/lib/colors";
import globalStyle from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import TitleText from "../../../commons/text/TitleText";
import ProfileImg from "../../../../../assets/updateUserInfo/profile.svg";
import Contents2Text from "../../../commons/text/Contents2Text";
import UpdateUserInfo from "../../../commons/navigationHeader/updateUserInfo/csHeader";

export default function UpdateMyInfoUI(props) {
   return (
      <>
         <UpdateUserInfo onPress={props.onPress}>
            회원정보 수정하기
         </UpdateUserInfo>
         <R.ScrollView>
            <S.Profile>
               <ProfileImg />
               <S.UserInfo>
                  <S.UserName>
                     <TitleText fontSize="15" color={colors.black}>
                        {props.name}
                     </TitleText>
                  </S.UserName>
                  <S.UserId>
                     <Contents1Text fontSize="10" color={colors.gray}>
                        {props.email}
                     </Contents1Text>
                  </S.UserId>
               </S.UserInfo>
            </S.Profile>
            <S.Wrapper style={globalStyle.GlobalStyles}>
               <TitleText fontSize="20" color={colors.theme}>
                  회원정보 수정하기
               </TitleText>
               <S.PhoneNumber>
                  <Contents1Text fontSize="14" color={colors.black}>
                     전화번호
                  </Contents1Text>
                  <S.PhoneNumberInputWrapper>
                     <S.PhoneNumberInput
                        placeholder="변경할 번호를 입력해 주세요."
                        style={{ includeFontPadding: false }}
                     ></S.PhoneNumberInput>
                     <S.CheckTouch activeOpacity={0.7}>
                        <Contents1Text fontSize="12" color="#ffffff">
                           인증요청
                        </Contents1Text>
                     </S.CheckTouch>
                  </S.PhoneNumberInputWrapper>
                  <S.Error>
                     <Contents2Text color="#ff6347">
                        전화번호 형식으로 입력해 주세요.
                     </Contents2Text>
                  </S.Error>
                  <S.CodeInputWrapper>
                     <S.CodeInput
                        placeholder="인증번호 입력"
                        style={{ includeFontPadding: false }}
                     ></S.CodeInput>
                     <S.CheckTouch activeOpacity={0.7}>
                        <Contents1Text fontSize="12" color="#ffffff">
                           확인
                        </Contents1Text>
                     </S.CheckTouch>
                  </S.CodeInputWrapper>
                  <S.Error>
                     <Contents2Text color={colors.theme}>
                        인증이 완료되었습니다.
                     </Contents2Text>
                  </S.Error>
               </S.PhoneNumber>

               <S.Password>
                  <Contents1Text fontSize="14" color={colors.black}>
                     비밀번호
                  </Contents1Text>
                  <S.PasswordInputWrapper>
                     <S.PasswordInput
                        placeholder="변경할 비밀번호를 입력해 주세요."
                        style={{ includeFontPadding: false }}
                     ></S.PasswordInput>
                  </S.PasswordInputWrapper>
                  <S.Error>
                     <Contents2Text color="#ff6347">
                        영문+숫자 조합 8~16자리를 입력해 주세요.
                     </Contents2Text>
                  </S.Error>
                  <S.PassWordCheckInputWrapper>
                     <S.PasswordCheckInput
                        placeholder="변경할 비밀번호룰 다시 입력해 주세요."
                        style={{ includeFontPadding: false }}
                     ></S.PasswordCheckInput>
                     <S.Error>
                        <Contents2Text color="#ff6347">
                           비밀번호가 일치하지 않습니다.
                        </Contents2Text>
                     </S.Error>
                  </S.PassWordCheckInputWrapper>
               </S.Password>
               <S.SaveTouchWrapper>
                  <S.SaveTouch>
                     <TitleText fontSize="14" color="#ffffff">
                        변경 사항 적용
                     </TitleText>
                  </S.SaveTouch>
               </S.SaveTouchWrapper>
            </S.Wrapper>
         </R.ScrollView>
      </>
   );
}
