import * as R from "react-native";
import * as S from "./License3.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import Button01Blue from "../../../commons/button/button_01_blue";
import Button02Blue from "../../../commons/button/button_02_blue";
import Button02Gray from "../../../commons/button/button_02_gray";
import SubTitleText from "../../../commons/text/SubTitleText";
import { MaterialIcons } from "@expo/vector-icons";

export default function License3PageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.TitleWrapper>
               <S.TitleBlue style={{ includeFontPadding: false }}>
                  면허{" "}
               </S.TitleBlue>
               <S.Title style={{ includeFontPadding: false }}>인증 </S.Title>
            </S.TitleWrapper>
            <S.ImageWrapper>
               <LicenseImage />
               {/* <S.ImageResult
                  resizeMode="contain"
                  source={{
                     uri: `data:image/png;base64,${props.base64}`,
                  }}
               /> */}
            </S.ImageWrapper>
            <S.MainText style={{ includeFontPadding: false }}>
               면허증 정보를 확인해주세요.
            </S.MainText>
            {props.result.Fail !== "" ? (
               <SubTitleText color="#a5a5a5">
                  다시인증해주세요, 운전면허증만 인증 가능합니다.
               </SubTitleText>
            ) : (
               <>
                  <S.InfoWrapper>
                     <S.InfoTitle style={{ includeFontPadding: false }}>
                        이름:
                     </S.InfoTitle>
                     <S.InfoDetail style={{ includeFontPadding: false }}>
                        {props.result.Name}
                     </S.InfoDetail>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                     <S.InfoTitle style={{ includeFontPadding: false }}>
                        주민등록번호 앞자리:
                     </S.InfoTitle>
                     <S.InfoDetail style={{ includeFontPadding: false }}>
                        {props.result.BirthDate.slice(2)}
                     </S.InfoDetail>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                     <S.InfoTitle style={{ includeFontPadding: false }}>
                        운전면허 번호:
                     </S.InfoTitle>
                     <S.InfoDetail style={{ includeFontPadding: false }}>
                        {props.result.LicNumber.replace(
                           props.result.LicNumber[
                              props.result.LicNumber.indexOf("-")
                           ],
                           " "
                        )}
                     </S.InfoDetail>
                  </S.InfoWrapper>
                  <S.InfoWrapper>
                     <R.View
                        style={{ flexDirection: "row", alignItems: "center" }}
                     >
                        <S.InfoTitle style={{ includeFontPadding: false }}>
                           식별번호
                        </S.InfoTitle>
                        <MaterialIcons
                           name="edit"
                           size={15}
                           color="#353535"
                           style={{ paddingBottom: 5 }}
                        />
                     </R.View>
                     <S.InfoDetailSpecialNum
                        onChangeText={props.setSpecialNumber}
                        style={{ includeFontPadding: false }}
                     >
                        {props.result.SpecialNumber}
                     </S.InfoDetailSpecialNum>
                  </S.InfoWrapper>
                  {!props.openSubmitButton && (
                     <S.ButtonWrapper>
                        <Button02Blue
                           func={props.onPressCheckLisense}
                           title="등록"
                        />
                     </S.ButtonWrapper>
                  )}
                  {props.openSubmitButton && (
                     <S.ButtonWrapper>
                        <Button01Blue
                           func={props.onPressSubmit}
                           title="회원가입"
                        />
                     </S.ButtonWrapper>
                  )}
               </>
            )}
            {props.result.Fail !== "" && (
               <S.ButtonWrapperFail>
                  <Button02Blue func={props.onPressGoback} title="다시찍기" />
               </S.ButtonWrapperFail>
            )}
            {props.result.Fail === "" && !props.openSubmitButton && (
               <S.ButtonWrapper>
                  <Button02Gray func={props.onPressGoback} title="다시찍기" />
               </S.ButtonWrapper>
            )}
         </R.ScrollView>
      </S.Wrapper>
   );
}
