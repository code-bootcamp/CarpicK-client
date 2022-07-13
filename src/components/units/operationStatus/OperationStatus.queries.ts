import { gql } from "apollo-boost";

export const FETCH_OWNER_RESERVATIONS = gql`
   query fetchOwnerReservations($page: Int) {
      fetchOwnerReservations(page: $page) {
         id
         startTime
         endTime
         amount
         status
         car {
            id
            imageCar {
               url
            }
         }
         user {
            id
            name
            email
         }
      }
   }
`;
