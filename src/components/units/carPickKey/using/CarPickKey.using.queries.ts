import { gql } from "apollo-boost";

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         reservation {
            endTime
            car {
               carNumber
            }
         }
      }
   }
`;
