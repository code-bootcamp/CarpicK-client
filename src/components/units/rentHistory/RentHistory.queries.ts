import { gql } from "apollo-boost";

export const FETCH_USER_RESERVATIONS = gql`
   query fetchUserReservations($page: Int) {
      fetchUserReservations(page: $page) {
         id
         startTime
         endTime
         amount
         status
         car {
            id
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
`;
