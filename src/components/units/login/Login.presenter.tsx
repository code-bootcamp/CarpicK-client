import * as S from "./Login.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import GoogleLogo from "../../../../assets/login/google-logo.svg";
import Button01Blue from "../../commons/button/button_01_blue";
import { ILoginPageUIProps } from "./Login.types";

export default function LoginPageUI(props: ILoginPageUIProps) {
   return (
      <>
         <S.Wrapper style={globalStyles.GlobalStyles40}>
            <S.Title style={{ includeFontPadding: false }}>CarpicK</S.Title>
            <S.Body>
               <S.Input
                  textContentType="emailAddress"
                  onChangeText={(text) => props.setEmail(text)}
                  placeholder="이메일을 입력해주세요"
               />
               <S.Input
                  onChangeText={(text) => props.setPassword(String(text))}
                  secureTextEntry={true}
                  placeholder="비밀번호를 입력해주세요"
               />
               <Button01Blue
                  func={props.onPressLogin}
                  title="로그인"
                  disabled={false}
               />
               <S.GoogleLoginTouch
                  activeOpacity={0.3}
                  onPress={() => {
                     props.googleSignIn();
                  }}
               >
                  <S.LogoWrapper>
                     <GoogleLogo />
                  </S.LogoWrapper>
                  <S.TextBox>
                     <S.GoogleText>Google 계정으로 로그인</S.GoogleText>
                  </S.TextBox>
               </S.GoogleLoginTouch>
            </S.Body>
            <S.Footer>
               <S.FooterTouch
                  activeOpacity={0.5}
                  onPress={props.onPressToFindId}
               >
                  <S.IdFind style={{ includeFontPadding: false }}>
                     아이디 찾기
                  </S.IdFind>
               </S.FooterTouch>
               <S.SectionBar />
               <S.FooterTouch
                  activeOpacity={0.5}
                  onPress={props.onPressToPasswordReset}
               >
                  <S.PwReset style={{ includeFontPadding: false }}>
                     비밀번호 재설정
                  </S.PwReset>
               </S.FooterTouch>
               <S.SectionBar />
               <S.FooterTouch onPress={props.onPressToJoin} activeOpacity={0.5}>
                  <S.ToJoin style={{ includeFontPadding: false }}>
                     회원가입
                  </S.ToJoin>
               </S.FooterTouch>
            </S.Footer>
         </S.Wrapper>
      </>
   );
}
