import * as R from "react-native";
import * as S from "./UploadCamera.styles";
import { IUploadCameraProps } from "./UploadCamera.types";
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

export default function UploadCamera(props: IUploadCameraProps) {
   // 권한 요청을 위한 hooks
   const uploadImage = async () => {
      // 퍼미션 승인 여부
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) return;

      const result = await ImagePicker.launchCameraAsync({
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
