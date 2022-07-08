import * as S from "./PasswordInput.styles";
import colors from "../../../../commons/lib/colors";
import globalStyle from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import TitleText from "../../../commons/text/TitleText";
import UpdateUserInfoPasswordInput from "../../../../../assets/updateUserInfo/password-input.svg";

export default function PasswordInputUI(props) {
   return (
      <S.Wrapper style={globalStyle.GlobalStyles}>
         <S.TitleWrapper>
            <TitleText fontSize="28" color={colors.black}>
               비밀번호 입력
            </TitleText>
         </S.TitleWrapper>
         <S.TitleSubWrapper>
            <Contents1Text fontSize="12" color={colors.gray}>
               회원정보를 수정하려면 비밀번호를 입력해야 합니다.
            </Contents1Text>
         </S.TitleSubWrapper>
         <S.PasswordInputWrapper>
            <S.PasswordInput
               placeholder="비밀번호를 입력해 주세요"
               style={{ includeFontPadding: false }}
            ></S.PasswordInput>
            <S.PassWordCheckTouch
               activeOpacity={0.7}
               onPress={props.onPressToUpdateMyInfo}
            >
               <Contents1Text fontSize="12" color="#ffffff">
                  확인
               </Contents1Text>
            </S.PassWordCheckTouch>
         </S.PasswordInputWrapper>
         <S.ImageWrapper>
            <UpdateUserInfoPasswordInput></UpdateUserInfoPasswordInput>
         </S.ImageWrapper>
      </S.Wrapper>
   );
}
