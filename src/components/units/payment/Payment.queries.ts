import { gql } from "apollo-boost";

export const CREATE_RESERVATION = gql`
   mutation createReservation(
      $createReservationInput: CreateReservationInput!
      $paymentInput: PaymentInput!
   ) {
      createReservation(
         createReservationInput: $createReservationInput
         paymentInput: $paymentInput
      ) {
         id
         startTime
         endTime
         amount
      }
   }
`;

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         id
         name
         email
         phone
         isAuth
      }
   }
`;
