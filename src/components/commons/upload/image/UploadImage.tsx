import * as R from "react-native";
import * as S from "./UploadImage.styles";
import { IUploadImageProps } from "./UploadImage.types";
import * as ImagePicker from "expo-image-picker";
import { ReactNativeFile } from "apollo-upload-client";

const generateRNFile = (uri: string, name: string) => {
   return uri
      ? new ReactNativeFile({
           uri,
           type: "image/*",
           name,
        })
      : null;
};

export default function UploadImage(props: IUploadImageProps) {
   const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

   const uploadImage = async () => {
      // 퍼미션 승인 여부
      if (!status?.granted) {
         const permission = await requestPermission();
         if (!permission.granted) return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         quality: 1,
         aspect: [1, 1],
      });

      if (result.cancelled) return;

      // 미리보기 이미지
      const newImageUris = [...props.imageUris];
      newImageUris[props.index] = result.uri;
      props.setImageUris(newImageUris);

      // 실제 전송할 이미지 파일
      const newImageFiles = [...props.imageFiles];
      newImageFiles[props.index] = generateRNFile(
         result.uri,
         `registration-${Date.now()}`
      );
      props.setImageFiles(newImageFiles);
   };

   return (
      <S.Wrapper>
         {props.imageUris[props.index] !== "" ? (
            <R.Pressable onPress={uploadImage}>
               <S.CarImage source={{ uri: props.imageUris[props.index] }} />
            </R.Pressable>
         ) : (
            <S.Box onPress={uploadImage}>
               <S.RowLine />
               <S.ColumnLine />
            </S.Box>
         )}
      </S.Wrapper>
   );
}
