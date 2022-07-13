import moment from "moment";
import * as S from "./StatusBar.styles";

export function statusBar(reservation) {
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

   const result = [];
   if (reservation.length !== 0) {
      reservation
         .filter((el) => {
            // 필터 1 : 현재시각 기준 end_time 끝난 예약 고려할 필요 X
            const timeEndPoint = moment(el.end_time);
            const timeDiffEndHours = moment
               .duration(nowTime.diff(timeEndPoint))
               .asHours();
            // console.log("this is timeDiff", timeDiffEndHours);
            return timeDiffEndHours < 0;
         })
         .filter((el) => {
            // 필터 2 : 오늘 24:00 보다 start_time 이후라면 고려할 필요 X
            const timeStartPoint = moment(el.start_time);
            const timeDiffEndHours = moment
               .duration(nowTimeEndPoint.diff(timeStartPoint))
               .asHours();
            // console.log("this is timeDiff", timeDiffEndHours);
            return timeDiffEndHours > 0;
         })
         .forEach((el, i) => {
            const timeStartPoint = moment(el.start_time);
            const timeEndPoint = moment(el.end_time);
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

   // console.log("this start", nowTimeStartPoint);
   // console.log("this end", nowTimeEndPoint);
   // console.log("this how much", timeDiffNowTime);
   // console.log("this is result", result);
   // console.log("this is reserve", reservation);
   // console.log("this is result", result);
   // console.log("this is nowTime", nowTimeHourFormat);

   const PREFIXBAR_WIDTH = timeDiffNowTime / 0.24;
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
