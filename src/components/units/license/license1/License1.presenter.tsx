import * as S from "./License1.styles";
import { ILicense1PageUIProps } from "./License1.types";
import globalStyles from "../../../../commons/styles/globalStyle";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import Contents1Text from "../../../commons/text/Contents1Text";

export default function License1PageUI(props: ILicense1PageUIProps) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <S.TitleWrapper>
            <S.TitleBlue style={{ includeFontPadding: false }}>
               면허{" "}
            </S.TitleBlue>
            <S.Title style={{ includeFontPadding: false }}>인증 </S.Title>
         </S.TitleWrapper>
         <S.Body>
            <S.MainText style={{ includeFontPadding: false }}>
               카픽을 시작하기위해 면허등록을 진행해주세요!
            </S.MainText>
            <S.SubText style={{ includeFontPadding: false }}>
               본인의 면허만 등록 가능합니다.
            </S.SubText>
            <S.ImageWrapper>
               <LicenseImage />
            </S.ImageWrapper>
         </S.Body>
         <S.NextTouch activeOpacity={0.7} onPress={props.onPressNext}>
            <S.NextText style={{ includeFontPadding: false }}>
               면허 인증 진행하기
            </S.NextText>
         </S.NextTouch>
         <S.Contents1TextTouch onPress={props.onPressSubmitNoLicense}>
            <Contents1Text color="#777777">
               지금 면허증이 없어요 다음에 진행할게요
            </Contents1Text>
         </S.Contents1TextTouch>
      </S.Wrapper>
   );
}
