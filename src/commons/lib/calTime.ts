// endTime - startTime을 계산하여 시간차를 return
export default function calTime(startTime: string, endTime: string) {
   const millisecond =
      new Date(endTime).getTime() - new Date(startTime).getTime();
   const seconds = millisecond / 1000;
   const minutes = seconds / 60;
   return minutes;
}
