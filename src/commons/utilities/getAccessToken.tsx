import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { REACT_APP_GRAPHQL_URL } from "@env";
import Modal4 from "../../components/commons/modals/modal4/Modal4";

const RESTORE_ACCESS_TOKEN = gql`
   mutation restoreAccessToken {
      restoreAccessToken {
         accessToken
      }
   }
`;

export default async function getAccessToken() {
   try {
      const graphQLClient = new GraphQLClient(REACT_APP_GRAPHQL_URL, {
         credentials: "include",
      });
      const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
      const newAccessToken = result.restoreAccessToken.accessToken;
      return newAccessToken;
   } catch (error: any) {
      return (
         <Modal4
            title="토큰 불러오기 실패"
            contents={error.message}
            positiveText="확인"
            positive={() => {}}
         />
      );
   }
}
