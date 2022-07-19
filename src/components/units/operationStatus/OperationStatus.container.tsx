import { useQuery } from "@apollo/client";
import OperationStatusUI from "./OperationStatus.presenter";
import {
   FETCH_OWNER_RESERVATIONS,
   FETCH_LOGIN_OWNER,
} from "./OperationStatus.queries";

export default function OperationStatusPage() {
   const { data, refetch, networkStatus, fetchMore } = useQuery(
      FETCH_OWNER_RESERVATIONS
   );
   const { data: onwerData } = useQuery(FETCH_LOGIN_OWNER);
   console.log("this is owner_resrv", data);
   console.log("this is ownerDATA", onwerData);

   const loadFunc = () => {
      if (!data) return;

      fetchMore({
         variables: {
            page: Math.ceil(data.fetchOwnerReservations.length / 10) + 1,
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchOwnerReservations)
               return {
                  fetchOwnerReservations: [...prev.fetchOwnerReservations],
               };
            return {
               fetchOwnerReservations: [
                  ...prev.fetchOwnerReservations,
                  ...fetchMoreResult.fetchOwnerReservations,
               ],
            };
         },
      });
   };

   return (
      <OperationStatusUI
         data={data}
         refetch={refetch}
         loadFunc={loadFunc}
         networkStatus={networkStatus}
      />
   );
}
