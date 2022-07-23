import * as R from "react-native";
import CustomerServiceHeaderIcon from "../../../../../assets/customerService/main-header-icon.svg";

export default function NavigationHeaderRight() {
   return (
      <>
         <R.Text
            style={{
               fontSize: 12,
               color: "black",
               fontFamily: "Regular",
               paddingRight: 11,
            }}
         >
            1234-1234
         </R.Text>
         <CustomerServiceHeaderIcon />
      </>
   );
}
