import { gql } from "apollo-boost";

export const LOGIN = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password)
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
