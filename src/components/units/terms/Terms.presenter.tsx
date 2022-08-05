import * as R from "react-native";
import * as S from "./Terms.styles";
import Button1 from "../../commons/button/Button1";
import { ITermsPageUIProps } from "./Terms.types";
import globalStyle from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import colors from "../../../commons/lib/colors";
import CheckBox1 from "../../commons/checkbox/CheckBox1";
import Contents1Text from "../../commons/text/Contents1Text";
import CheckBox2 from "../../commons/checkbox/CheckBox2";

export default function TermsPageUI(props: ITermsPageUIProps) {
   return (
      <>
         <S.Wrapper style={globalStyle.GlobalStyles}>
            <R.View style={{ marginTop: 10 }}>
               <TitleText fontSize="24" color={colors.theme}>
                  약관 동의
               </TitleText>
               <R.View style={{ marginTop: 20 }}>
                  <Contents1Text fontSize="15">{`회원가입을 위하여 아래의\n약관에 동의를 해주세요!`}</Contents1Text>
               </R.View>
               <R.View style={{ marginTop: 60 }}>
                  <CheckBox1
                     onChange={props.onChangeAllChecked}
                     checked={props.isAllChecked}
                     contents="모두 동의합니다."
                  />
                  <S.CheckBoxContainer>
                     <CheckBox2
                        onChange={props.onChangeServiceChecked}
                        checked={props.isServiceChecked}
                        contents="서비스 이용약관 동의"
                     />
                     <R.TouchableOpacity
                        activeOpacity={0.7}
                        onPress={props.onPressService}
                     >
                        <Contents1Text color={colors.gray}>
                           자세히 보기
                        </Contents1Text>
                     </R.TouchableOpacity>
                  </S.CheckBoxContainer>
                  <S.CheckBoxContainer>
                     <CheckBox2
                        onChange={props.onChangePrivacyChecked}
                        checked={props.isPrivacyChecked}
                        contents="개인정보처리 이용약관 동의"
                     />
                     <R.TouchableOpacity
                        activeOpacity={0.7}
                        onPress={props.onPressPrivacy}
                     >
                        <Contents1Text color={colors.gray}>
                           자세히 보기
                        </Contents1Text>
                     </R.TouchableOpacity>
                  </S.CheckBoxContainer>
               </R.View>
            </R.View>
         </S.Wrapper>
         <Button1 isDisabled={!props.isAllChecked} onPress={props.onPressNext}>
            다음
         </Button1>
      </>
   );
}
