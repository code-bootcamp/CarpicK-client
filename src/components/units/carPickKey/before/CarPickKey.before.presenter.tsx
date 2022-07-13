import * as R from "react-native";
import * as S from "./CarPickKey.before.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import Button1 from "../../../commons/button/Button1";
import UploadImage from "../../../commons/upload/image/UploadImage";
import { ICarPickKeyBeforeUIProps } from "./CarPickKey.before.types";

export default function CarPickKeyBeforeUI(props: ICarPickKeyBeforeUIProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View>
               <TitleText fontSize="17" fontFamily="Bold">
                  차량 사진
               </TitleText>
               <R.View style={{ marginTop: 7 }}>
                  <Contents1Text>{`카픽키를 사용하기 위해서는 사진이 필요합니다.\n차량 외관이 잘 보이게 찍어주세요!`}</Contents1Text>
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
            onPress={props.onPressToCarPickKey}
            isDisabled={
               !(
                  props.imageUris?.[0] !== "" &&
                  props.imageUris?.[1] !== "" &&
                  props.imageUris?.[2] !== ""
               )
            }
         >
            카픽키 사용하기
         </Button1>
      </S.Wrapper>
   );
}
