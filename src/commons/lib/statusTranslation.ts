export default function statusTranslation(status: string) {
   switch (status) {
      case "IN_PROCESS":
         return "심사중";
      case "FAIL":
         return "심사 거절 되었습니다.";
      case "PASS":
         return "승인";
   }
}
