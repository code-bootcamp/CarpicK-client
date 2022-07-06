import { gql } from "apollo-boost";

export const CHECK_EMAIL = gql`
   mutation checkEmail($email: String!) {
      checkEmail(email: $email)
   }
`;

export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
   }
`;

export const LOGOUT = gql`
   mutation logout($email: String!, $password: String!) {
      logout(email: $email, password: $password)
   }
`;
