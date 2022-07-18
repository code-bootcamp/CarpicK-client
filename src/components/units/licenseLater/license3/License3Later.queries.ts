import { gql } from "apollo-boost";

export const CHECK_LICENSE = gql`
   mutation checkLicense(
      $BirthDate: String!
      $Name: String!
      $LicNumber: String!
      $SpecialNumber: String!
   ) {
      checkLicense(
         BirthDate: $BirthDate
         Name: $Name
         LicNumber: $LicNumber
         SpecialNumber: $SpecialNumber
      )
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

export const UPDATE_LICENSE = gql`
   mutation updateUserIsAuth($isAuth: Boolean!) {
      updateUserIsAuth(isAuth: $isAuth)
   }
`;
