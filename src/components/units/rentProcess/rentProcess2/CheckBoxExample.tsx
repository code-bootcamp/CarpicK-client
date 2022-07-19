import { useCallback, useEffect, useState } from "react";
import * as R from "react-native";
import CheckBox1 from "../../../commons/checkbox/CheckBox1";
import CheckBox2 from "../../../commons/checkbox/CheckBox2";

export default function CheckBoxExample() {
   const [isAllChecked, setIsAllChecked] = useState(false);
   const [isChecked1, setIsChecked1] = useState(false);
   const [isChecked2, setIsChecked2] = useState(false);
   const [isChecked3, setIsChecked3] = useState(false);

   const checkAllHandler = (isChecked: boolean) => {
      setIsAllChecked(isChecked);
      if (isChecked) {
         // 전체 체크 ON
         setIsChecked1(true);
         setIsChecked2(true);
         setIsChecked3(true);
      } else {
         // 전체 체크 OFF
         setIsChecked1(false);
         setIsChecked2(false);
         setIsChecked3(false);
      }
   };
   const check1Handler = (isChecked: boolean) => {
      setIsChecked1(isChecked);
   };
   const check2Handler = (isChecked: boolean) => {
      setIsChecked2(isChecked);
   };
   const check3Handler = (isChecked: boolean) => {
      setIsChecked3(isChecked);
   };

   useEffect(() => {
      if (isChecked1 && isChecked2 && isChecked3) {
         // 3개가 다 체크 되어있을때
         setIsAllChecked(true);
      } else {
         setIsAllChecked(false);
      }
   }, [isChecked1, isChecked2, isChecked3]);

   console.log(isAllChecked, isChecked1, isChecked2, isChecked3);

   return (
      <R.View>
         <CheckBox1
            onChange={checkAllHandler}
            checked={isAllChecked}
            contents="예약 정보 확인 및 모든 약관에 동의합니다."
         />
         <CheckBox2
            onChange={check1Handler}
            checked={isChecked1}
            contents="[필수] 카픽 자동차대여약관"
         />
         <CheckBox2
            onChange={check2Handler}
            checked={isChecked2}
            contents="[필수] 카픽 차량손해면책제도 이용약관"
         />
         <CheckBox2
            onChange={check3Handler}
            checked={isChecked3}
            contents="[필수] 개인정보 수집 및 이용 동의"
         />
      </R.View>
   );
   q;
}
