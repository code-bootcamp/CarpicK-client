import { gql } from "apollo-boost";

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
