import * as R from "react-native";
import * as S from "./License1Later.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import LicenseImage from "../../../../../assets/license/license-image.svg";
import LicenseDone from "../../../../../assets/license/done.svg";

export default function License1LaterPageUI(props) {
   return (
      <S.Wrapper style={globalStyles.GlobalStyles}>
         {!props.data.fetchLoginUser.isAuth && (
            <>
               <S.TitleWrapper>
                  <S.TitleBlue style={{ includeFontPadding: false }}>
                     면허{" "}
                  </S.TitleBlue>
                  <S.Title style={{ includeFontPadding: false }}>등록 </S.Title>
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
            </>
         )}
         {props.data.fetchLoginUser.isAuth && (
            <>
               <S.TitleBlue style={{ includeFontPadding: false }}>
                  {" "}
                  면허등록을 완료하셨습니다.
               </S.TitleBlue>
               <S.ImageWrapperDone>
                  <LicenseDone />
               </S.ImageWrapperDone>
            </>
         )}
      </S.Wrapper>
   );
}
