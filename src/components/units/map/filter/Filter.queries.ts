import { gql } from "apollo-boost";

export const FETCH_CAR_CATEGORY = gql`
   query fetchCarCategory {
      fetchCarCategory {
         id
         name
         carModel {
            id
            name
         }
      }
   }
`;
