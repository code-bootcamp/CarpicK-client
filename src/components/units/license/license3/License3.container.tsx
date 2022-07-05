import { useEffect, useState } from "react";
import License3PageUI from "./License3.presenter";

export default function License3Page({ navigation, route }) {
   console.log("this is props", route.params.result);

   const onPressGoback = () => {
      navigation.navigate("license2");
   };

   return (
      <License3PageUI
         result={route.params.result}
         onPressGoback={onPressGoback}
      />
   );
}
