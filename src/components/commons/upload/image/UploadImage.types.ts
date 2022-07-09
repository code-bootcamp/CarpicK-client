export interface IUploadImageProps {
   imageFile?: string;
   uploadImage: (index: number) => Promise<void>;
   index: number;
}
