import { gql } from "apollo-boost";

export const FETCH_POPULAR_CARS = gql`
   query fetchPopularCars {
      fetchPopularCars {
         id
         carNumber
         isHipass
         price
         oil
         contractPeriod
         ownerEmail
         carModel
         carLocation
         reservation
         rating
      }
   }
`;
