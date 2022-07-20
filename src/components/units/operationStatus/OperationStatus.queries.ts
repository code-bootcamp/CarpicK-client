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
         user {
            id
            name
            email
         }
      }
   }
`;

export const FETCH_LOGIN_OWNER = gql`
   query fetchLoginOwner {
      fetchLoginOwner {
         id
         car {
            carModel {
               name
            }
         }
         revenue
      }
   }
`;
