import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { NetworkStatus } from "apollo-boost";

export interface IRentHistoryUIProps {
   isNone: boolean;
   data?: any;
   refetch: (
      variables?: Partial<OperationVariables> | undefined
   ) => Promise<ApolloQueryResult<any>>;
   loadFunc: () => void;
   networkStatus: NetworkStatus;
}
