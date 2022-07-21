import { gql } from "apollo-boost";

export const UPLOAD_FILE = gql`
   mutation uploadFile($files: [Upload!]!) {
      uploadFile(files: $files)
   }
`;

export const END_CAR = gql`
   mutation endCar($endCarInput: EndCarInput!) {
      endCar(endCarInput: $endCarInput)
   }
`;

export const CREATE_REVIEW = gql`
   mutation createReview($carId: String!, $rating: Int!) {
      createReview(carId: $carId, rating: $rating) {
         id
      }
   }
`;
