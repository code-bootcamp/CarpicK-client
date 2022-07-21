import * as R from "react-native";
import * as S from "./CarPickKey.after.styles";
import { ICarPickKeyAfterUIProps } from "./CarPickKey.after.types";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import Button1 from "../../../commons/button/Button1";
import { Rating } from "react-native-ratings";
import UploadCamera from "../../../commons/upload/camera/UploadCamera";
import Modal3 from "../../../commons/modals/modal3/Modal3";

export default function CarPickKeyAfterUI(props: ICarPickKeyAfterUIProps) {
   return (
      <>
         <S.Wrapper>
            <S.Container style={globalStyle.GlobalStyles}>
               <R.View>
                  <TitleText fontSize="17" fontFamily="Bold">
                     차량 사진
                  </TitleText>
                  <R.View style={{ marginTop: 7 }}>
                     <Contents1Text>{`차량 반납을 위해서는 사진이 필요합니다.\n이용하신 차량의 외관이 잘 보이게 찍어주세요!`}</Contents1Text>
                  </R.View>
               </R.View>
               <S.ImageContainer>
                  {props.imageUris?.map((_, index) => (
                     <UploadCamera
                        key={index}
                        imageFiles={props.imageFiles}
                        setImageFiles={props.setImageFiles}
                        imageUris={props.imageUris}
                        setImageUris={props.setImageUris}
                        index={index}
                     />
                  ))}
               </S.ImageContainer>
               <S.RatingBox style={{ marginTop: 50 }}>
                  <Contents1Text fontFamily="Regular" fontSize="14">
                     차량 이용은 어떠셨나요?
                  </Contents1Text>
                  <Rating
                     style={{ paddingVertical: 15 }}
                     imageSize={30}
                     startingValue={0}
                     onFinishRating={props.onChangeRating}
                  />
               </S.RatingBox>
            </S.Container>
            <Button1
               onPress={props.onPressReturn}
               isDisabled={
                  !(
                     props.imageUris?.[0] !== "" &&
                     props.imageUris?.[1] !== "" &&
                     props.rating > 0
                  )
               }
            >
               반납 완료하기
            </Button1>
         </S.Wrapper>
         {props.isModalVisible && (
            <Modal3
               contents="반납을 완료했습니다."
               positiveText="확인"
               positive={props.onPressReturn}
            />
         )}
      </>
   );
}
