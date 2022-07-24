import moment from "moment";
import * as S from "./StatusBar.styles";

export function statusBar(reservation: []) {
   const nowTime = moment();
   const nowTimeHourFormat =
      Number(nowTime.format("HH:mm").split(":")[0]) +
      Number(nowTime.format("HH:mm").split(":")[1]) / 60;

   const nowTimeStartPoint = moment(
      moment().format("YYYY-MM-DD") + " 00:00:00"
   );
   const nowTimeEndPoint = moment(moment().format("YYYY-MM-DD") + " 24:00:00");
   const timeDiffNowTime = moment
      .duration(nowTime.diff(nowTimeStartPoint))
      .asHours();

   const result: any[] = [];
   if (reservation.length !== 0) {
      reservation
         .filter((el: any) => {
            // 필터 0 : CANCEL된 예약 제거
            return el.status !== "CANCEL";
         })
         .filter((el: any) => {
            // 필터 1 : 현재시각 기준 endTime 끝난 예약 고려할 필요 X
            const timeEndPoint = moment(el.endTime);
            const timeDiffEndHours = moment
               .duration(nowTime.diff(timeEndPoint))
               .asHours();
            return timeDiffEndHours < 0;
         })
         .filter((el: any) => {
            // 필터 2 : 오늘 24:00 보다 startTime 이후라면 고려할 필요 X
            const timeStartPoint = moment(el.startTime);
            const timeDiffEndHours = moment
               .duration(nowTimeEndPoint.diff(timeStartPoint))
               .asHours();
            return timeDiffEndHours > 0;
         })
         .forEach((el: any) => {
            const timeStartPoint = moment(el.startTime);
            const timeEndPoint = moment(el.endTime);
            const timeDiffStart = moment
               .duration(timeStartPoint.diff(nowTime))
               .asHours();
            const timeDiffEndDay = moment
               .duration(timeEndPoint.diff(nowTime))
               .asDays();
            const timeDiffNowEndEnd = moment
               .duration(nowTimeEndPoint.diff(timeEndPoint))
               .asHours();

            if (timeDiffStart < 0 && timeDiffEndDay > 0) {
               // case 1 : 기존 예약 시작 지점이 현재시간 이전
               if (timeDiffNowEndEnd >= 0) {
                  // case 1-1 : 오늘내로 반납하는 예약
                  result.push({
                     totalHour: moment
                        .duration(timeEndPoint.diff(nowTime))
                        .asHours(),
                     grayStartPoint: moment(nowTime).format("HH:mm"),
                     grayEndPoint: moment(timeEndPoint).format("HH:mm"),
                  });
               } else {
                  // case 1-2 : 오늘 이후에 반납하는 예약
                  // result.push({
                  //    totalHour: moment
                  //       .duration(nowTimeEndPoint.diff(nowTime))
                  //       .asHours(),
                  //    grayStartPoint: moment(nowTime).format("HH:mm"),
                  //    grayEndPoint: moment(nowTimeEndPoint).format("HH:mm"),
                  // });
               }
            } else if (timeDiffStart > 0 && timeDiffEndDay > 0) {
               // case 2 : 기존 예약 시작 지점이 현재시간 이후
               if (timeDiffNowEndEnd >= 0) {
                  // case 2-1 : 오늘내로 반납하는 예약
                  result.push({
                     totalHour: moment
                        .duration(timeEndPoint.diff(timeStartPoint))
                        .asHours(),
                     grayStartPoint: moment(timeStartPoint).format("HH:mm"),
                     grayEndPoint: moment(timeEndPoint).format("HH:mm"),
                  });
               } else {
                  // case 2-2 : 오늘 이후에 반납하는 예약
                  // result.push({
                  //    totalHour: moment
                  //       .duration(nowTimeEndPoint.diff(timeStartPoint))
                  //       .asHours(),
                  //    grayStartPoint: moment(timeStartPoint).format("HH:mm"),
                  //    grayEndPoint: moment(nowTimeEndPoint).format("HH:mm"),
                  // });
               }
            }
         });
   }

   return (
      <S.Wrapper>
         <S.FullStatusBar />
         <S.PrefixBar barLength={(nowTimeHourFormat / 0.24).toFixed(3)} />
         {result.map((el, i) => {
            return (
               <S.Bar
                  key={i}
                  barLength={String((el.totalHour / 0.24).toFixed(3))}
                  barStart={String(
                     (
                        (Number(el.grayStartPoint.split(":")[0]) +
                           Number(el.grayStartPoint.split(":")[1]) / 60) /
                        0.24
                     ).toFixed(3)
                  )}
               />
            );
         })}
      </S.Wrapper>
   );
}
