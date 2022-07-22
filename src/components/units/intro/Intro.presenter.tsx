import * as R from "react-native";
import * as S from "./Intro.styles";
import { IIntroPageUIProps } from "./Intro.types";
import Carousel, { Pagination } from "react-native-snap-carousel";
import Intro1 from "../../../../assets/intro/Intro1-r1.svg";
import Intro2 from "../../../../assets/intro/Intro2-r1.svg";
import Intro3 from "../../../../assets/intro/Intro3-r1.svg";
import colors from "../../../commons/lib/colors";

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

const renderItem = ({ item }: any) => (
   <R.View
      style={{
         alignItems: "center",
         flex: 1,
         height: "100%",
         justifyContent: "center",
      }}
   >
      <S.ImageContainer>{item.image()}</S.ImageContainer>
   </R.View>
);

export default function IntroPageUI(props: IIntroPageUIProps) {
   return (
      <S.Wrapper>
         <S.CarouselContainer>
            <Carousel
               data={data}
               layout="default"
               renderItem={renderItem}
               sliderWidth={SLIDER_WIDTH}
               itemWidth={SLIDER_WIDTH}
               inactiveSlideScale={1}
               inactiveSlideOpacity={1}
               onSnapToItem={(i) => props.setActiveTab(i)}
               activeSlideAlignment="end"
               autoplay
               autoplayInterval={3800}
               swipeThreshold={50}
               decelerationRate="normal"
               pagingEnabled={true}
               loop
            />
            <Pagination
               dotStyle={styles.dot}
               dotsLength={3}
               containerStyle={{
                  backgroundColor: "#f7f8f9",
               }}
               inactiveDotOpacity={0.3}
               inactiveDotScale={0.6}
               activeDotIndex={props.activeTab}
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

const styles = R.StyleSheet.create({
   dot: {
      width: 30,
      height: 5,
      borderRadius: 0,
      backgroundColor: colors.theme,
   },
});
