import { gql } from "apollo-boost";

export const SEND_SMS = gql`
   mutation sendTokenToSMS($phone: String!) {
      sendTokenToSMS(phone: $phone)
   }
`;

export const IS_VALID_EMAIL = gql`
   mutation isValidEmail($email: String!) {
      isValidEmail(email: $email) {
         isValid
         phone
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
