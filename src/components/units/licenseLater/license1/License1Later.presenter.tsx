import * as S from "./License1Later.styles";
import * as R from "react-native";
import globalStyles from "../../../../commons/styles/globalStyle";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import LicenseDone from "../../../../../assets/license/done.svg";
import { ILicense1LaterPageUIProps } from "./License1Later.types";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import colors from "../../../../commons/lib/colors";

export default function License1LaterPageUI(props: ILicense1LaterPageUIProps) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         {!props.data?.fetchLoginUser.isAuth && (
            <>
               <TitleText color={colors.theme} fontSize="24">
                  면허 등록
               </TitleText>
               <R.View style={{ marginTop: 20 }}>
                  <Contents1Text fontSize="15">{`카픽을 시작하기위해\n면허등록을 진행해주세요!`}</Contents1Text>
               </R.View>
               <S.Body>
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
            </>
         )}
         {props.data?.fetchLoginUser.isAuth && (
            <>
               <S.TitleBlue style={{ includeFontPadding: false }}>
                  {" "}
                  면허 등록을 완료하셨습니다.
               </S.TitleBlue>
               <S.ImageWrapperDone>
                  <LicenseDone />
               </S.ImageWrapperDone>
            </>
         )}
      </S.Wrapper>
   );
}
