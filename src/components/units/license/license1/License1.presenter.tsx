import * as S from "./License1.styles";
import * as R from "react-native";
import { ILicense1PageUIProps } from "./License1.types";
import globalStyles from "../../../../commons/styles/globalStyle";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import Contents1Text from "../../../commons/text/Contents1Text";
import colors from "../../../../commons/lib/colors";
import TitleText from "../../../commons/text/TitleText";

export default function License1PageUI(props: ILicense1PageUIProps) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         <TitleText color={colors.theme} fontSize="24">
            기본 정보
         </TitleText>
         <R.View style={{ marginTop: 20 }}>
            <Contents1Text fontSize="15">{`카픽을 시작하기전에\n면허등록을 진행해주세요!`}</Contents1Text>
         </R.View>
         <S.Body>
            <R.View style={{ marginTop: 15, marginBottom: 20 }}>
               <Contents1Text color={colors.gray} fontSize="14">
                  본인의 면허만 등록 가능합니다.
               </Contents1Text>
            </R.View>
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
            <Contents1Text color={colors.gray}>
               지금 면허증이 없어요 다음에 진행할게요
            </Contents1Text>
         </S.Contents1TextTouch>
      </S.Wrapper>
   );
}
