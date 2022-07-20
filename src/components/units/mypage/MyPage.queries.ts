import { gql } from "apollo-boost";

export const FETCH_LOGIN_OWNER = gql`
   query fetchLoginOwner {
      fetchLoginOwner {
         name
         email
         isAuth
         revenue
         car {
            carNumber
            isHipass
            oil
            carModel {
               name
            }
            carLocation {
               address
               addressDetail
            }
            imageCar {
               url
            }
         }
         carRegistration {
            carNumber
            isHipass
            model
            oil
            address
            status
            imageCar {
               url
            }
         }
      }
   }
`;
