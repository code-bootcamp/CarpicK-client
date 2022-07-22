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

export const CREATE_USER = gql`
   mutation createUser($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
         id
         email
         name
         password
         phone
         isAuth
      }
   }
`;
