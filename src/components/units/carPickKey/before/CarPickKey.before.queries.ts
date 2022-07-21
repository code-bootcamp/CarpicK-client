import { gql } from "apollo-boost";

export const UPLOAD_FILE = gql`
   mutation uploadFile($files: [Upload!]!) {
      uploadFile(files: $files)
   }
`;

export const START_CAR = gql`
   mutation startCar($startCarInput: StartCarInput!) {
      startCar(startCarInput: $startCarInput)
   }
`;
