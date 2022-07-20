import { gql } from "apollo-boost";

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         isAuth
         reservation {
            startTime
            endTime
            car {
               carNumber
               carModel {
                  name
               }
               carLocation {
                  addressDetail
               }
               imageCar {
                  url
               }
            }
         }
      }
   }
`;
