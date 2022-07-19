import * as R from "react-native";
import * as S from "./OperationStatus.styles";
import OperationStatusItem from "../../commons/operationStatusItem/OperationStatusItem";
import { IOperationStatusProps } from "./OperationStatus.types";
import TitleText from "../../commons/text/TitleText";
import colors from "../../../commons/lib/colors";

const LIST = ["이용중", "예약완료", "예약취소", "반납완료"];

const renderItem = ({ item }) => {
   return <OperationStatusItem data={item} />;
};

export default function OperationStatusUI(props: IOperationStatusProps) {
   return (
      <>
         <R.FlatList
            data={props.data?.fetchOwnerReservations}
            refreshing={props.networkStatus === 4}
            onRefresh={props.refetch}
            onEndReached={props.loadFunc}
            renderItem={renderItem}
            keyExtractor={(data: any) => data.id}
         />
         <S.Footer>
            <S.TitleWrapper>
               <TitleText color={colors.theme}>마이카 총 수익</TitleText>
               <TitleText color={colors.dark_gray}>
                  {props.data?.fetchOwnerReservations
                     .map((el) => {
                        if (el.status !== "CANCEL") return el.amount;
                     })
                     .reduce((a, c) => a + c)}{" "}
                  원
               </TitleText>
            </S.TitleWrapper>
         </S.Footer>
      </>
   );
}
