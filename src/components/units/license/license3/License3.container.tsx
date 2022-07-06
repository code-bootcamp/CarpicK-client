import { useEffect, useState } from "react";
import License3PageUI from "./License3.presenter";

export default function License3Page({ navigation, route }) {
   const onPressGoback = () => {
      navigation.navigate("license2");
   };

   return (
      <License3PageUI
         result={route.params.result}
         base64={route.params.base64}
         onPressGoback={onPressGoback}
      />
   );
}
