import { gql } from "apollo-boost";

export const FETCH_CAR = gql`
   query fetchCar($carId: String!) {
      fetchCar(carId: $carId) {
         id
         carNumber
         isHipass
         price
         oil
         contractStart
         contractEnd
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
