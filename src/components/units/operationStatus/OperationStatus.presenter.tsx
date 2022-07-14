import * as R from "react-native";
import globalStyle from "../../../commons/styles/globalStyle";
import OperationStatusItem from "../../commons/operationStatusItem/OperationStatusItem";

const LIST = ["이용중", "예약완료", "예약취소", "반납완료"];

export default function OperationStatusUI() {
   return (
      <R.ScrollView style={globalStyle.GlobalStyles}>
         {LIST.map((status, index) => (
            <OperationStatusItem key={index} status={status} />
         ))}
      </R.ScrollView>
   );
}
