export default function statusTranslation(status: string) {
   switch (status) {
      case "IN_PROCESS":
         return "심사중";
      case "FAIL":
         return "거절";
      case "PASS":
         return "승인";
   }
}
