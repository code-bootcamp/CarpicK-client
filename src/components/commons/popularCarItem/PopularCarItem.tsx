import * as R from "react-native";
import * as S from "./PopularCarItem.styles";
import { Rating } from "react-native-ratings";
import LocationIcon from "../../../../assets/popularCar/ic_location.svg";
import GoldMedal from "../../../../assets/popularCar/ic_medal1.svg";
import SilverMedal from "../../../../assets/popularCar/ic_medal2.svg";
import BronzeMedal from "../../../../assets/popularCar/ic_medal3.svg";
import colors from "../../../commons/lib/colors";
import Contents1Text from "../text/Contents1Text";
import TitleText from "../text/TitleText";

interface IPopularCarItemProps {
   data?: any;
   index: number;
}

export default function PopularCarItem(props: IPopularCarItemProps) {
   return (
      <S.Wrapper>
         <S.Container>
            {props.index >= 0 && props.index <= 2 && (
               <S.MedalBox>
                  {props.index === 0 && <GoldMedal />}
                  {props.index === 1 && <SilverMedal />}
                  {props.index === 2 && <BronzeMedal />}
               </S.MedalBox>
            )}
            <S.CarInfoContainer>
               <S.CarImage
                  resizeMode="contain"
                  source={{
                     uri: "https://autoimg.danawa.com/photo/3742/48893/color_12_360.png",
                  }}
               />
               <TitleText fontSize="16">44호 0541</TitleText>
               <TitleText
                  fontSize="14"
                  fontFamily="Regular"
                  color={colors.gray}
               >
                  K5
               </TitleText>
            </S.CarInfoContainer>
            <S.ContentsContainer>
               <R.View style={{ flexDirection: "row" }}>
                  <Contents1Text fontFamily="Bold" fontSize="15">
                     {props.data.name}
                  </Contents1Text>
                  <R.View style={{ marginLeft: 3 }}>
                     <Contents1Text fontSize="15">이웃님</Contents1Text>
                  </R.View>
               </R.View>
               <Contents1Text>
                  이웃분들이 {props.data.population}번 이용하셨습니다!
               </Contents1Text>
               <S.LocationBox>
                  <LocationIcon />
                  <R.View style={{ marginLeft: 3 }}>
                     <Contents1Text>G밸리플라자 지하2층 주차장</Contents1Text>
                  </R.View>
               </S.LocationBox>
               <S.RatingBox>
                  <Contents1Text
                     fontFamily="Bold"
                     fontSize="18"
                     color={colors.theme}
                  >
                     {props.data.rating.toFixed(1)}
                  </Contents1Text>
                  <Rating
                     style={{ paddingHorizontal: 10 }}
                     imageSize={22}
                     startingValue={props.data.rating}
                     readonly
                  />
               </S.RatingBox>
            </S.ContentsContainer>
         </S.Container>
      </S.Wrapper>
   );
}
