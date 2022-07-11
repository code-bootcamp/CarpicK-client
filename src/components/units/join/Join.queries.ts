import { gql } from "apollo-boost";

export const ISVALID_EMAIL = gql`
   mutation isValidEmail($email: String!) {
      isValidEmail(email: $email) {
         isValid
         phone
      }
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

export const SEND_SMS = gql`
   mutation sendTokenToSMS($phone: String!) {
      sendTokenToSMS(phone: $phone)
   }
`;

export const CHECK_TOKEN = gql`
   mutation checkToken($token: String!) {
      checkToken(token: $token)
   }
`;
