import * as R from "react-native";
import * as S from "./OperationStatus.styles";
import OperationStatusItem from "../../commons/operationStatusItem/OperationStatusItem";
import { IOperationStatusProps } from "./OperationStatus.types";
import TitleText from "../../commons/text/TitleText";
import colors from "../../../commons/lib/colors";
import { numberWithCommas } from "../../../commons/utilities/numberWithCommas";

const renderItem = ({ item }: any) => {
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
            keyExtractor={(item) => item.id}
         />
         <S.Footer>
            <S.TitleWrapper>
               <TitleText color={colors.theme}>마이카 총 수익</TitleText>
               <TitleText color={colors.dark_gray}>
                  {numberWithCommas(props.ownerData?.fetchLoginOwner.revenue)}{" "}
                  원
               </TitleText>
            </S.TitleWrapper>
         </S.Footer>
      </>
   );
}
