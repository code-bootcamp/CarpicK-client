import * as R from "react-native";
import * as S from "./CarRegistration.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import { ICarRegistrationUIProps } from "./CarRegistration.types";
import Button1 from "../../../commons/button/Button1";
import Modal4 from "../../../commons/modals/modal4/Modal4";
import UploadImageNoRatio from "../../../commons/upload/image/UploadImageNoRatio";

export default function CarRegistrationUI(props: ICarRegistrationUIProps) {
   return (
      <S.Wrapper>
         <S.Container style={globalStyle.GlobalStyles}>
            <R.View>
               <TitleText fontSize="17" fontFamily="Bold">
                  차량 등록증
               </TitleText>
               <R.View style={{ marginTop: 7 }}>
                  <Contents1Text>{`본인 차량등록증의 이미지를 보내주세요!\n확인 후 결과를 알림으로 보내드릴께요!`}</Contents1Text>
               </R.View>
            </R.View>
            <S.ImageContainer>
               <UploadImageNoRatio
                  imageFiles={props.imageFiles}
                  setImageFiles={props.setImageFiles}
                  imageUris={props.imageUris}
                  setImageUris={props.setImageUris}
                  index={0}
               />
            </S.ImageContainer>
         </S.Container>
         <Button1
            onPress={props.onPressRegister}
            isDisabled={!(props.imageUris?.[0] !== "")}
         >
            마이카 신청
         </Button1>
      </S.Wrapper>
   );
}
