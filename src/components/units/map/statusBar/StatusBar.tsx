import moment from "moment";
import * as S from "./StatusBar.styles";

export function statusBar(reservation) {
   const nowTime = moment();
   const nowTimeStartPoint = moment(
      moment().format("YYYY-MM-DD") + " 00:00:00"
   );
   const nowTimeEndPoint = moment(moment().format("YYYY-MM-DD") + " 24:00:00");
   const timeDiffNowTime = moment
      .duration(nowTime.diff(nowTimeStartPoint))
      .asHours();

   const result = [];
   reservation.forEach((el, i) => {
      const timeStartPoint = moment(el.start_time);
      const timeEndPoint = moment(el.end_time);
      const timeDiffStart = moment
         .duration(timeStartPoint.diff(nowTime))
         .asHours();
      const timeDiffEndDay = moment
         .duration(timeEndPoint.diff(nowTime))
         .asDays();

      if (timeDiffStart < 0 && timeDiffEndDay > 0 && timeDiffEndDay < 1) {
         // case1
         result.push({
            totalHour: moment.duration(timeEndPoint.diff(nowTime)).asHours(),
            grayStartPoint: moment(nowTime).format("HH:mm"),
            grayEndPoint: moment(timeEndPoint).format("HH:mm"),
         });
      } else if (timeDiffStart < 0 && timeDiffEndDay > 1) {
         // case 2
         result.push({
            totalHour: moment.duration(nowTimeEndPoint.diff(nowTime)).asHours(),
            grayStartPoint: moment(nowTime).format("HH:mm"),
            grayEndPoint: moment(nowTimeEndPoint).format("HH:mm"),
         });
      } else if (timeDiffStart > 0 && timeDiffEndDay > 1) {
         // case 4
         result.push({
            totalHour: moment
               .duration(nowTimeEndPoint.diff(timeStartPoint))
               .asHours(),
            grayStartPoint: moment(timeStartPoint).format("HH:mm"),
            grayEndPoint: moment(nowTimeEndPoint).format("HH:mm"),
         });
      } else if (timeDiffStart > 0 && timeDiffEndDay < 1) {
         // case 5
         result.push({
            totalHour: moment
               .duration(timeEndPoint.diff(timeStartPoint))
               .asHours(),
            grayStartPoint: moment(timeStartPoint).format("HH:mm"),
            grayEndPoint: moment(timeEndPoint).format("HH:mm"),
         });
      }
   });

   // console.log("this start", nowTimeStartPoint);
   // console.log("this end", nowTimeEndPoint);
   // console.log("this how much", timeDiffNowTime);

   const PREFIXBAR_WIDTH = timeDiffNowTime / 0.24;
   console.log(result);
   return (
      <S.Wrapper>
         <S.FullStatusBar />
         <S.PrefixBar />
         {result.map((el, i) => (
            <S.Bar
               key={i}
               barLength={String(el.totalHour / 0.24)}
               barStart={String(
                  (Number(el.grayStartPoint.split(":")[0]) +
                     Number(el.grayStartPoint.split(":")[1]) / 60) /
                     0.24
               )}
            />
         ))}
      </S.Wrapper>
   );
}
