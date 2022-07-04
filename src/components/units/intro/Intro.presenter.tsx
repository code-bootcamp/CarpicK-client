import * as R from "react-native";
import * as S from "./Intro.styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Intro1 from "../../../../assets/intro/Intro1.svg";
import Intro2 from "../../../../assets/intro/Intro2.svg";
import Intro3 from "../../../../assets/intro/Intro3.svg";

export const SLIDER_WIDTH = R.Dimensions.get("window").width;

const data = [
   {
      id: 1,
      name: "Intro1",
      image: Intro1,
   },
   {
      id: 2,
      name: "Intro2",
      image: Intro2,
   },
   {
      id: 3,
      name: "Intro3",
      image: Intro3,
   },
];

const renderItem = ({ item }) => (
   <S.ImageContainer>{item.image()}</S.ImageContainer>
);

export default function IntroPageUI(props) {
   return (
      <S.Wrapper>
         <S.CarouselContainer>
            <Carousel
               data={data}
               layout="default"
               renderItem={renderItem}
               sliderWidth={SLIDER_WIDTH}
               itemWidth={SLIDER_WIDTH}
               inactiveSlideOpacity={1}
               inactiveSlideScale={1}
               activeSlideAlignment="end"
               autoplay
               autoplayInterval={4500}
               swipeThreshold={50}
               decelerationRate={5}
               loop
            />
         </S.CarouselContainer>
         <S.Footer>
            <S.LoginTouch activeOpacity={0.7} onPress={props.onPressLogin}>
               <S.Login>
                  <S.FooterText>로그인</S.FooterText>
               </S.Login>
            </S.LoginTouch>
            <S.JoinTouch activeOpacity={0.7} onPress={props.onPressJoin}>
               <S.Join>
                  <S.FooterText>가입하기</S.FooterText>
               </S.Join>
            </S.JoinTouch>
         </S.Footer>
      </S.Wrapper>
   );
}
