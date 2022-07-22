import { gql } from "apollo-boost";

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         isAuth
         reservation {
            id
            startTime
            endTime
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
            payment {
               id
               impUid
               amount
               paymentMethod
            }
         }
      }
   }
`;

export const CANCEL_RESERVATION = gql`
   mutation cancelReservation(
      $reservationId: String!
      $paymentInput: PaymentInput!
   ) {
      cancelReservation(
         reservationId: $reservationId
         paymentInput: $paymentInput
      )
   }
`;
