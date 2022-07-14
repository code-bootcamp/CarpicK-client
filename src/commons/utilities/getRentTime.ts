import moment from "moment";

export default function GetRentTime() {
   const nowtime = moment();
   const remainder = 10 - (nowtime.minute() % 10);

   const startTime = moment(nowtime)
      .add(remainder, "minutes")
      .format("DD-HH:mm");

   let endTime = moment(nowtime)
      .add(remainder, "minutes")
      .add(4, "hours")
      .format("DD-HH:mm");

   if (startTime.split("-")[0] !== endTime.split("-")[0])
      endTime = startTime.split("-")[0] + "-" + "24:00";

   const totalMin = moment
      .duration(
         moment(endTime.split("-")[1], "HH:mm").diff(
            moment(startTime.split("-")[1], "HH:mm")
         )
      )
      .asMinutes();

   const finalHour = parseInt(String(totalMin / 60));
   const finalMin = totalMin - finalHour * 60;

   return {
      startTime: startTime.split("-")[1],
      endTime: endTime.split("-")[1],
      finalHour,
      finalMin,
   };
}
