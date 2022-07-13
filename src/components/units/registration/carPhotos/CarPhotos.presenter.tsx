import * as R from "react-native";
import * as S from "./CarPhotos.styles";
import { ICarPhotosUIProps } from "./CarPhotos.types";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import Button1 from "../../../commons/button/Button1";
import UploadImage from "../../../commons/upload/image/UploadImage";

export default function CarPhotosUI(props: ICarPhotosUIProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View>
               <TitleText fontSize="17" fontFamily="Bold">
                  차량 사진
               </TitleText>
               <R.View style={{ marginTop: 7 }}>
                  <Contents1Text>{`사용자가 차량을 이용할 수 있게\n번호판이 보이도록 이쁘게 찍어주세요!`}</Contents1Text>
               </R.View>
            </R.View>
            <S.ImageContainer>
               {props.imageUris?.map((_, index) => (
                  <UploadImage
                     key={index}
                     imageFiles={props.imageFiles}
                     setImageFiles={props.setImageFiles}
                     imageUris={props.imageUris}
                     setImageUris={props.setImageUris}
                     index={index}
                  />
               ))}
            </S.ImageContainer>
         </S.Container>
         <Button1
            onPress={props.onPressNext}
            isDisabled={
               !(
                  props.imageUris?.[0] !== "" &&
                  props.imageUris?.[1] !== "" &&
                  props.imageUris?.[2] !== ""
               )
            }
         >
            다음
         </Button1>
      </S.Wrapper>
   );
}
