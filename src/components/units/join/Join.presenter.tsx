import * as R from "react-native";
import * as S from "./Join.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import Button01 from "../../commons/button/button_01";

export default function JoinPageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.TitleWrapper>
               <S.TitleBlue style={{ includeFontPadding: false }}>
                  카픽{" "}
               </S.TitleBlue>
               <S.Title style={{ includeFontPadding: false }}>
                  회원가입{" "}
               </S.Title>
            </S.TitleWrapper>
            <S.Body>
               <S.EmailWrapper>
                  <S.EmailText style={{ includeFontPadding: false }}>
                     이메일
                  </S.EmailText>
                  <S.EmailRow>
                     <S.EmailLeft>
                        <S.EmailInput
                           placeholder="이메일 형식으로 입력해주세요."
                           style={{ includeFontPadding: false }}
                        />
                        <S.InputBottomLine />
                     </S.EmailLeft>
                     <S.EmailCheckTouch activeOpacity={0.7}>
                        <S.EmailCheckText style={{ includeFontPadding: false }}>
                           중복확인
                        </S.EmailCheckText>
                     </S.EmailCheckTouch>
                  </S.EmailRow>
               </S.EmailWrapper>
               <S.NameWrapper>
                  <S.NameText style={{ includeFontPadding: false }}>
                     이름
                  </S.NameText>
                  <S.NameInput
                     placeholder="실명을 입력해 주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.NameWrapper>
               <S.PhoneWrapper>
                  <S.PhoneText style={{ includeFontPadding: false }}>
                     전화번호
                  </S.PhoneText>
                  <S.PhoneInput
                     placeholder="전화번호를 입력해 주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.PhoneWrapper>
               <S.PwWrapper>
                  <S.PwText style={{ includeFontPadding: false }}>
                     비밀번호
                  </S.PwText>
                  <S.PwInput
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.PwWrapper>
               <S.PwAgainWrapper>
                  <S.PwAgainText style={{ includeFontPadding: false }}>
                     비밀번호 재확인
                  </S.PwAgainText>
                  <S.PwAgainInput
                     secureTextEntry={true}
                     placeholder="영문+숫자 조합 8~16 자리를 입력해주세요."
                     style={{ includeFontPadding: false }}
                  />
                  <S.InputBottomLine />
               </S.PwAgainWrapper>
               <Button01 func={props.onPressNext} title="다음" />
            </S.Body>
         </R.ScrollView>
      </S.Wrapper>
   );
}
