import * as R from "react-native";
import * as S from "./UploadImage.styles";
import { IUploadImageProps } from "./UploadImage.types";
import * as ImagePicker from "expo-image-picker";

export default function UploadImage(props: IUploadImageProps) {
   // 권한 요청을 위한 hooks
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

      const newImageFiles = [...props.imageFiles];
      newImageFiles[props.index] = result.uri;
      props.setImageFiles(newImageFiles);
   };

   return (
      <S.Wrapper>
         {props.imageFile !== "" ? (
            <R.Pressable onPress={uploadImage}>
               <S.CarImage source={{ uri: props.imageFile }} />
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
