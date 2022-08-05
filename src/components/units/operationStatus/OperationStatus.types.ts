import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { NetworkStatus } from "apollo-boost";

export interface IOperationStatusProps {
   data?: any;
   ownerData?: any;
   refetch: (
      variables?: Partial<OperationVariables> | undefined
   ) => Promise<ApolloQueryResult<any>>;
   loadFunc: () => void;
   networkStatus: NetworkStatus;
}
