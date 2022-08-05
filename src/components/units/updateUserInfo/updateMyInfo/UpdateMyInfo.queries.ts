import { gql } from "apollo-boost";

export const RESET_PWD = gql`
   mutation resetPwd($email: String!, $password: String!) {
      resetPwd(email: $email, password: $password)
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

export const UPDATE_USER_PHONE = gql`
   mutation updateUserPhone($phone: String!) {
      updateUserPhone(phone: $phone)
   }
`;
