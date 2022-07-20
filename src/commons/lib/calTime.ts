// endTime - startTime을 계산하여 시간차를 return
export default function calTime(startTime: string, endTime: string) {
   const millisecond =
      new Date(endTime).getTime() - new Date(startTime).getTime();
   const seconds = millisecond / 1000;
   const minutes = seconds / 60;

   if (minutes > 60) {
      if (minutes % 60 === 0) {
         return `${minutes / 60}시간`;
      } else {
         return `${minutes / 60}시간 ${minutes % 60}분`;
      }
   } else {
      return `${minutes}분`;
   }
}
