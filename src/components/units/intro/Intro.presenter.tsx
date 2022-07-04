import * as R from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import * as S from "./Intro.styles";
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

export default function IntroPageUI() {
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
            <R.TouchableOpacity style={{ width: "50%" }} activeOpacity={0.7}>
               <S.Login>
                  <R.Text
                     style={{ fontFamily: "NotoSansKR", color: "#ffffff" }}
                  >
                     로그인
                  </R.Text>
               </S.Login>
            </R.TouchableOpacity>
            <R.TouchableOpacity style={{ width: "50%" }} activeOpacity={0.7}>
               <S.Join>
                  <R.Text
                     style={{ fontFamily: "NotoSansKR", color: "#ffffff" }}
                  >
                     가입하기
                  </R.Text>
               </S.Join>
            </R.TouchableOpacity>
         </S.Footer>
      </S.Wrapper>
   );
}
