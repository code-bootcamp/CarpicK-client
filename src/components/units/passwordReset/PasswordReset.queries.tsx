import { gql } from "apollo-boost";

export const FETCH_USER = gql`
   query fetchUser($email: String!) {
      fetchUser(email: $email)
   }
`;

export const SEND_SMS = gql`
   mutation sendTokenToSMS($phone: String!) {
      sendTokenToSMS(phone: $phone)
   }
`;
