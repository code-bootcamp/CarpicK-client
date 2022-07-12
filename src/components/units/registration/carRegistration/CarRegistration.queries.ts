import { gql } from "apollo-boost";

export const UPLOAD_FILE = gql`
   mutation uploadFile($files: [Upload!]!) {
      uploadFile(files: $files)
   }
`;
