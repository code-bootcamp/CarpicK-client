import * as R from "react-native";
import globalStyle from "../../../commons/styles/globalStyle";
import OperationStatusItem from "../../commons/operationStatusItem/OperationStatusItem";
import { IOperationStatusProps } from "./OperationStatus.types";

const LIST = ["이용중", "예약완료", "예약취소", "반납완료"];

const renderItem = ({ item }) => {
   return <OperationStatusItem data={item} />;
};

export default function OperationStatusUI(props: IOperationStatusProps) {
   return (
      <R.FlatList
         style={globalStyle.GlobalStyles}
         data={props.data?.fetchOwnerReservations}
         renderItem={renderItem}
         keyExtractor={(data: any) => data.id}
      />
   );
}
