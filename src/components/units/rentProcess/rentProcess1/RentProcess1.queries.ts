import { gql } from "apollo-boost";

export const FETCH_CAR = gql`
   query fetchCar($carId: String!) {
      fetchCar(carId: $carId) {
         id
         carNumber
         isHipass
         price
         oil
         contractPeriod
         carModel {
            name
         }
         carLocation {
            address
            addressDetail
         }
         reservation {
            startTime
            endTime
            amount
            status
         }
         imageCar {
            url
         }
      }
   }
`;
