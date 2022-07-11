import { useEffect, useState } from "react";
import License3LaterPageUI from "./License3Later.presenter";

export default function License3LaterPage({ navigation, route }) {
   const onPressGoback = () => {
      navigation.navigate("license2Later");
      route.params.setIsPhoto(false);
   };

   console.log("this is result", route.params.result);

   return (
      <License3LaterPageUI
         result={route.params.result}
         base64={route.params.base64}
         onPressGoback={onPressGoback}
      />
   );
}

const locationNum = {
   11: "서울",
   12: "부산",
   13: "경기",
   14: "강원",
   15: "충북",
   16: "충남",
   17: "전북",
   18: "전남",
   19: "경북",
   20: "경남",
   21: "제주",
   22: "대구",
   23: "인천",
   24: "광주",
   25: "대전",
   26: "울산",
   28: "없음",
};
