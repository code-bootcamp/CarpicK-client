import { gql } from "apollo-boost";

export const FETCH_CAR_LOCATION = gql`
   query fetchCarLocation($fetchCarLocationInput: FetchCarLocationInput!) {
      fetchCarLocation(fetchCarLocationInput: $fetchCarLocationInput) {
         id
         address
         addressDetail
         lat
         lng
      }
   }
`;

export const FETCH_CARS = gql`
   query fetchCars($carLocationId: String!) {
      fetchCars(carLocationId: $carLocationId) {
         id
         carNumber
         price
         oil
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
            status
         }
         imageCar {
            url
         }
      }
   }
`;

export const FETCH_CAR = gql`
   query fetchCar($carLocationId: String!, $page: Int) {
      fetchCar(carLocationId: $carLocationId, page: $page) {
         id
         carNumber
         isHipass
         price
         oil
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
            status
         }
         imageCar {
            url
         }
      }
   }
`;
