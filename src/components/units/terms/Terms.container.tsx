import { useEffect, useState } from "react";
import TermsPageUI from "./Terms.presenter";

export default function TermsPage({ navigation }: any) {
   const [isAllChecked, setIsAllChecked] = useState(false);
   const [isServiceChecked, setIsServiceChecked] = useState(false);
   const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

   const onChangeAllChecked = (isChecked: boolean) => {
      setIsAllChecked(isChecked);
      if (isChecked) {
         // 전체 체크 ON
         setIsServiceChecked(true);
         setIsPrivacyChecked(true);
      } else {
         // 전체 체크 OFF
         setIsServiceChecked(false);
         setIsPrivacyChecked(false);
      }
   };

   const onChangeServiceChecked = (isChecked: boolean) => {
      setIsServiceChecked(isChecked);
   };

   const onChangePrivacyChecked = (isChecked: boolean) => {
      setIsPrivacyChecked(isChecked);
   };

   useEffect(() => {
      if (isServiceChecked && isPrivacyChecked) {
         setIsAllChecked(true);
      } else {
         setIsAllChecked(false);
      }
   }, [isServiceChecked, isPrivacyChecked]);

   const onPressService = () => {
      navigation.navigate("termsWebView", {
         uri: "http://carpick.shop/terms/service",
      });
   };

   const onPressPrivacy = () => {
      navigation.navigate("termsWebView", {
         uri: "http://carpick.shop/terms/privacy",
      });
   };

   const onPressNext = () => {
      navigation.navigate("join");
   };
   return (
      <TermsPageUI
         isAllChecked={isAllChecked}
         isServiceChecked={isServiceChecked}
         isPrivacyChecked={isPrivacyChecked}
         onChangeAllChecked={onChangeAllChecked}
         onChangeServiceChecked={onChangeServiceChecked}
         onChangePrivacyChecked={onChangePrivacyChecked}
         onPressService={onPressService}
         onPressPrivacy={onPressPrivacy}
         onPressNext={onPressNext}
      />
   );
}
