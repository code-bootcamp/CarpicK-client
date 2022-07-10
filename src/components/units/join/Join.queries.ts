import { gql } from "apollo-boost";

export const CHECK_EMAIL = gql`
   mutation checkEmail($email: String!) {
      checkEmail(email: $email)
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
