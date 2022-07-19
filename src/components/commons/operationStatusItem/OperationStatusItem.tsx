import * as R from "react-native";
import * as S from "./OperationStatusItem.styles";
import LocationIcon from "../../../../assets/operationStatus/ic_location.svg";
import colors from "../../../commons/lib/colors";
import Contents1Text from "../text/Contents1Text";
import TitleText from "../text/TitleText";
import moment from "moment";
import { numberWithCommas } from "../../../commons/utilities/numberWithCommas";

/*************************
 *   'RESERVATION' : 예약
 *   'CANCEL' : 예약취소
 *   'RETURN' : 반납완료
 *   'USING' : 이용중
 *************************/

interface OperationStatusItemProps {
   data?: any;
}

export default function OperationStatusItem(props: OperationStatusItemProps) {
   const statusTranslation = (status?: string) => {
      switch (status) {
         case "USING":
            return "이용중";
         case "RESERVATION":
            return "예약완료";
         case "CANCEL":
            return "예약취소";
         case "RETURN":
            return "반납완료";
      }
   };

   const statusBackgroundColor = (status?: string) => {
      switch (status) {
         case "이용중":
            return colors.theme;
         case "예약완료":
            return "#7DA2FF";
         case "예약취소":
            return colors.gray;
         case "반납완료":
            return "#1C1F66";
      }
   };

   const createDate = (startTime, endTime) => {
      const dayArr = ["일", "월", "화", "수", "목", "금", "토"];

      const yearMonthDay = moment(startTime).format("YYYY.MM.DD");
      const day = dayArr[moment(startTime).day()];
      const timeDuration =
         moment(startTime).format("HH:mm") +
         "~" +
         moment(endTime).format("HH:mm");

      return `${yearMonthDay}(${day}) ${timeDuration}`;
   };

   const maskingName = (name) => {
      if (name === undefined || name === "") {
         return "";
      }
      const pattern = /.$/; // 이름 뒤 한자리 마스킹
      return name.replace(pattern, "*");
   };

   return (
      <S.Wrapper>
         <S.Container>
            <S.ContentsContainer>
               <S.CarInfoContainer>
                  <S.CarImage
                     resizeMode="contain"
                     source={{
                        uri: `https://storage.googleapis.com/${props?.data.car.imageCar[0].url}`,
                     }}
                  />
                  <R.View style={{ marginTop: 6, alignItems: "center" }}>
                     <TitleText fontSize="16">
                        {props?.data.car.carNumber}
                     </TitleText>
                     <TitleText
                        fontSize="14"
                        fontFamily="Regular"
                        color={colors.gray}
                     >
                        {props?.data.car.carModel.name}
                     </TitleText>
                  </R.View>
               </S.CarInfoContainer>
               <S.ReservationContainer>
                  <S.StatusContainer
                     backgroundColor={statusBackgroundColor(
                        statusTranslation(props?.data.status)
                     )}
                  >
                     <Contents1Text fontSize="10" color="#fff">
                        {statusTranslation(props?.data.status)}
                     </Contents1Text>
                  </S.StatusContainer>
                  <R.View style={{ flexDirection: "row" }}>
                     <Contents1Text fontFamily="Bold">[예약자] </Contents1Text>
                     <Contents1Text>
                        {maskingName(props?.data.user.name)} 이웃님
                     </Contents1Text>
                  </R.View>
                  <R.View style={{ marginTop: 5 }}>
                     <Contents1Text>
                        {createDate(props?.data.startTime, props?.data.endTime)}
                     </Contents1Text>
                  </R.View>
                  <S.LocationBox>
                     <LocationIcon />
                     <Contents1Text>
                        {props?.data.car.carLocation.addressDetail}
                     </Contents1Text>
                  </S.LocationBox>
                  <Contents1Text>
                     총 결제금액 : {numberWithCommas(props?.data.amount)}원
                  </Contents1Text>
               </S.ReservationContainer>
            </S.ContentsContainer>
         </S.Container>
      </S.Wrapper>
   );
}
