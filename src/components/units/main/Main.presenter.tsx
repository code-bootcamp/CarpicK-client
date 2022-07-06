import * as R from "react-native";
import * as S from "./Main.styles";
import globalStyles from "../../../commons/styles/globalStyle";
import TitleText from "../../commons/text/TitleText";
import Contents1Text from "../../commons/text/Contents1Text";
import SubTitleText from "../../commons/text/SubTitleText";
import MainImage1 from "../../../../assets/main/main-1.svg";
import MainImage2 from "../../../../assets/main/main-2.svg";
import MainImage3 from "../../../../assets/main/main-3.svg";
import MainImage4 from "../../../../assets/main/main-4.svg";
import MainImage5 from "../../../../assets/main/main-5.svg";

const VIEW_WIDTH: number = R.Dimensions.get("window").width;
const CARD_WIDTH: number = (VIEW_WIDTH - 50) / 2;
const CARD_HEIGTH: number = CARD_WIDTH * 1.53;

export default function MainPageUI() {
   return (
      <>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.Wrapper style={globalStyles.GlobalStyles}>
               <S.DoubleWrapper>
                  <S.VerticalCard
                     width={CARD_WIDTH}
                     height={CARD_HEIGTH}
                     activeOpacity={0.5}
                  >
                     <S.TitleWrapper>
                        <TitleText color="#353535">빌리러 가기</TitleText>
                        <S.SubTitleWrapper>
                           <Contents1Text fontSize="14" color="#777777">
                              가까운 카픽존
                           </Contents1Text>
                           <Contents1Text color="#777777">찾기</Contents1Text>
                        </S.SubTitleWrapper>
                     </S.TitleWrapper>
                     <S.ImageWrapper>
                        <MainImage1 />
                     </S.ImageWrapper>
                  </S.VerticalCard>
                  <S.VerticalCard
                     width={CARD_WIDTH}
                     height={CARD_HEIGTH}
                     activeOpacity={0.5}
                  >
                     <S.TitleWrapper>
                        <TitleText color="#353535">My Car</TitleText>
                        <TitleText color="#353535">등록하기</TitleText>
                     </S.TitleWrapper>
                     <S.ImageWrapper>
                        <MainImage2 />
                     </S.ImageWrapper>
                  </S.VerticalCard>
               </S.DoubleWrapper>
               <S.HorizontalCard height={CARD_WIDTH}>
                  <S.TitleWrapper>
                     <TitleText color="#353535">빌리러 가기</TitleText>
                     <S.SubTitleWrapper>
                        <Contents1Text fontSize="14" color="#777777">
                           스마트키로 간편하게
                        </Contents1Text>
                     </S.SubTitleWrapper>
                  </S.TitleWrapper>
                  <S.ImageWrapper>
                     <MainImage3 />
                  </S.ImageWrapper>
               </S.HorizontalCard>
               <S.HorizontalCard height={CARD_WIDTH}>
                  <S.TitleWrapper>
                     <TitleText color="#353535">인기 차 보러가기</TitleText>
                     <S.SubTitleWrapper>
                        <Contents1Text fontSize="14" color="#777777">
                           실시간 Top 10
                        </Contents1Text>
                     </S.SubTitleWrapper>
                  </S.TitleWrapper>
                  <S.ImageWrapper>
                     <MainImage4 />
                  </S.ImageWrapper>
               </S.HorizontalCard>
               <S.HorizontalCard height={CARD_WIDTH}>
                  <S.TitleWrapper>
                     <TitleText color="#353535">CarpicK 시작하기</TitleText>
                     <S.SubTitleWrapper>
                        <Contents1Text fontSize="14" color="#777777">
                           카픽 이용 가이드
                        </Contents1Text>
                     </S.SubTitleWrapper>
                  </S.TitleWrapper>
                  <S.ImageWrapper>
                     <MainImage5 />
                  </S.ImageWrapper>
               </S.HorizontalCard>
            </S.Wrapper>
         </R.ScrollView>
      </>
   );
}
