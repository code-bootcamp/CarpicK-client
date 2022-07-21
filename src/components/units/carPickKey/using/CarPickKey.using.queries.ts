import { gql } from "apollo-boost";

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         reservation {
            id
            endTime
            car {
               id
               carNumber
            }
         }
      }
   }
`;
