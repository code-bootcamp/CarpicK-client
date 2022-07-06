import * as R from "react-native";
import * as S from "./License2.styles";
import { CameraType } from "expo-camera";
import { Platform } from "react-native";
import Tip1Image from "../../../../../assets/license/tip-1.svg";
import Tip2Image from "../../../../../assets/license/tip-2.svg";

const VIEW_HEIGTH: number = R.Dimensions.get("window").height - 260;
const MIDDEL_HEIGTH: number = VIEW_HEIGTH - 290;

export default function License2PageUI(props) {
   return (
      <S.Wrapper>
         <S.Header />
         <S.MyCamera
            type={CameraType.back}
            captureAudio={false}
            ref={props.cameraRef}
            ratio={"16:9"}
         >
            <S.ScreenTop />
            {/* bottom gray영역 */}
            <S.ScreenBottom
               height={Platform.OS === "ios" ? 500 : 177}
               top={Platform.OS === "ios" ? MIDDEL_HEIGTH : MIDDEL_HEIGTH + 113}
            />
            {/* left, right gray영역 */}
            <S.ScreenLeft
               height={
                  Platform.OS === "ios" ? MIDDEL_HEIGTH - 113 : MIDDEL_HEIGTH
               }
            />
            <S.ScreenRight
               height={
                  Platform.OS === "ios" ? MIDDEL_HEIGTH - 113 : MIDDEL_HEIGTH
               }
            />
            <S.GuideScreen>
               <S.GuideHeader>카메라로 신분증을 촬영합니다.</S.GuideHeader>
               <S.GuideHeader>사각형에 맞게 신분증을 놓아주세요</S.GuideHeader>
               <S.GuideFooter
                  top={
                     Platform.OS === "ios"
                        ? MIDDEL_HEIGTH + 20
                        : MIDDEL_HEIGTH + 133
                  }
               >
                  <S.Tip1>
                     <Tip1Image />
                     <S.TipTextWrapper>
                        <S.TipText>어두운 배경에서</S.TipText>
                        <S.TipText>촬영하세요.</S.TipText>
                     </S.TipTextWrapper>
                  </S.Tip1>
                  <S.Tip2>
                     <Tip2Image />
                     <S.TipTextWrapper>
                        <S.TipText>빛 반사에</S.TipText>
                        <S.TipText>유의하세요.</S.TipText>
                     </S.TipTextWrapper>
                  </S.Tip2>
               </S.GuideFooter>
            </S.GuideScreen>
            <S.Footer>
               <S.ButtonWrapper>
                  <S.ButtonText>촬영</S.ButtonText>
                  <S.ButtonBody>
                     <S.UndoTouch onPress={props.onPressGoBack}>
                        <S.ButtonUndoText>취소</S.ButtonUndoText>
                     </S.UndoTouch>
                     <S.ButtonTouch>
                        <S.InnerCircle onPress={props.takePic} />
                     </S.ButtonTouch>
                  </S.ButtonBody>
               </S.ButtonWrapper>
            </S.Footer>
         </S.MyCamera>
      </S.Wrapper>
   );
}
