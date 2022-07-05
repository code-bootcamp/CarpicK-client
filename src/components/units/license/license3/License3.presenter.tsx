import * as R from "react-native";
import * as S from "./License3.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import Button01Blue from "../../../commons/button/button_01_blue";
import Button01Gray from "../../../commons/button/button_01_gray";

export default function License3PageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <S.TitleWrapper>
            <S.TitleBlue style={{ includeFontPadding: false }}>
               면허{" "}
            </S.TitleBlue>
            <S.Title style={{ includeFontPadding: false }}>인증 </S.Title>
         </S.TitleWrapper>
         <S.ImageWrapper>
            <LicenseImage />
         </S.ImageWrapper>
         <S.MainText style={{ includeFontPadding: false }}>
            면허증 정보를 확인해주세요.
         </S.MainText>
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
                  props.result.LicNumber[props.result.LicNumber.indexOf("-")],
                  " "
               )}
            </S.InfoDetail>
         </S.InfoWrapper>
         <S.InfoWrapper>
            <S.InfoTitle style={{ includeFontPadding: false }}>
               식별번호:
            </S.InfoTitle>
            <S.InfoDetail style={{ includeFontPadding: false }}>
               {props.result.SpecialNumber}
            </S.InfoDetail>
         </S.InfoWrapper>
         <Button01Blue func={""} title="등록" />
         <Button01Gray func={props.onPressGoback} title="다시찍기" />
      </S.Wrapper>
   );
}
