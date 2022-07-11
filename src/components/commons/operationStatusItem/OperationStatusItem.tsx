import * as R from "react-native";
import * as S from "./OperationStatusItem.styles";
import LocationIcon from "../../../../assets/operationStatus/ic_location.svg";
import colors from "../../../commons/lib/colors";
import Contents1Text from "../text/Contents1Text";
import TitleText from "../text/TitleText";

/*************************
 *   'RESERVATION' : 예약
 *   'CANCEL' : 예약취소
 *   'RETURN' : 반납완료
 *   'USING' : 이용중
 *************************/

interface OperationStatusItemProps {
   status: string;
}

export default function OperationStatusItem(props: OperationStatusItemProps) {
   const textDirectionVertical = (status: string) => {
      return status.split("").join("\n");
   };

   const statusBackgroundColor = (status: string) => {
      switch (status) {
         case "이용중":
            return colors.theme;
         case "예약완료":
            return colors.purple;
         case "예약취소":
            return colors.gray;
         case "반납완료":
            return colors.dark_gray;
      }
   };

   return (
      <S.Wrapper>
         <S.Container>
            <S.StatusContainer
               backgroundColor={statusBackgroundColor(props.status)}
            >
               <S.StatusText>
                  {textDirectionVertical(props.status)}
               </S.StatusText>
            </S.StatusContainer>
            <S.ContentsContainer>
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
               <S.ReservationContainer>
                  <R.View style={{ flexDirection: "row" }}>
                     <Contents1Text fontFamily="Bold">[예약자]</Contents1Text>
                     <Contents1Text>홍길동</Contents1Text>
                  </R.View>
                  <R.View style={{ marginTop: 5 }}>
                     <Contents1Text fontFamily="Bold">[기간]</Contents1Text>
                     <Contents1Text>21.07.06(수) 15:30~17:00</Contents1Text>
                  </R.View>
                  <S.LocationBox>
                     <LocationIcon />
                     <Contents1Text>G밸리플라자 지하2층 주차장</Contents1Text>
                  </S.LocationBox>
               </S.ReservationContainer>
            </S.ContentsContainer>
         </S.Container>
      </S.Wrapper>
   );
}
