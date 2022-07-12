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
