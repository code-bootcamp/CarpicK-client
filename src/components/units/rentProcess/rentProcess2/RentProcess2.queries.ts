import { gql } from "apollo-boost";

export const CREATE_RESERVATION = gql`
   mutation createReservation(
      $createReservationInput: CreateReservationInput!
   ) {
      createReservation(createReservationInput: $createReservationInput) {
         id
         startTime
         endTime
         amount
      }
   }
`;
