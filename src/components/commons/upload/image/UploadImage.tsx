import * as R from "react-native";
import * as S from "./UploadImage.styles";
import { IUploadImageProps } from "./UploadImage.types";

export default function UploadImage(props: IUploadImageProps) {
   return (
      <S.Wrapper>
         {props.imageFile !== "" ? (
            <R.Pressable onPress={() => props.uploadImage(props.index)}>
               <S.CarImage source={{ uri: props.imageFile }} />
            </R.Pressable>
         ) : (
            <S.Box onPress={() => props.uploadImage(props.index)}>
               <S.RowLine />
               <S.ColumnLine />
            </S.Box>
         )}
      </S.Wrapper>
   );
}
