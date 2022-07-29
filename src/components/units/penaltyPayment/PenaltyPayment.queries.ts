import { gql } from "apollo-boost";

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

export const CREATE_PENALTY_PAYMENT = gql`
   mutation createPenaltyPayment(
      $reservationId: String!
      $paymentInput: PaymentInput!
   ) {
      createPenaltyPayment(
         reservationId: $reservationId
         paymentInput: $paymentInput
      ) {
         id
         impUid
         amount
      }
   }
`;
