import { gql } from "apollo-boost";

export const FETCH_LOGIN_USER = gql`
   query fetchLoginUser {
      fetchLoginUser {
         id
         name
         email
         phone
         isAuth
         revenue
      }
   }
`;

export const UPLOAD_FILE = gql`
   mutation uploadFile($files: [Upload!]!) {
      uploadFile(files: $files)
   }
`;

export const CREATE_CAR_REGISTRATION = gql`
   mutation createCarRegistration(
      $createCarRegistrationInput: CreateCarRegistrationInput!
   ) {
      createCarRegistration(
         createCarRegistrationInput: $createCarRegistrationInput
      ) {
         id
         carNumber
         isHipass
         model
         oil
         address
         status
      }
   }
`;
