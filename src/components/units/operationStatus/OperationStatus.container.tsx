import { useQuery } from "@apollo/client";
import OperationStatusUI from "./OperationStatus.presenter";
import { FETCH_OWNER_RESERVATIONS } from "./OperationStatus.queries";

export default function OperationStatusPage() {
   const { data } = useQuery(FETCH_OWNER_RESERVATIONS, {
      variables: { page: 1 },
   });
   console.log(data);
   return <OperationStatusUI />;
}
