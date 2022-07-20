export default function oilTranslation(oil: string) {
   switch (oil) {
      case "GASOLINE":
         return "가솔린";
      case "LIGHT_OIL":
         return "경유";
      case "LPG":
         return "LPG";
      case "ELECTRIC":
         return "전기";
   }
}
