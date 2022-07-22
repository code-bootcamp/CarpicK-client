import { gql } from "apollo-boost";

export const FETCH_POPULAR_CARS = gql`
   query fetchPopularCars {
      fetchPopularCars {
         id
         ownerName
         carNumber
         price
         oil
         carModel
         addressDetail
         num
         rating
         url
      }
   }
`;
