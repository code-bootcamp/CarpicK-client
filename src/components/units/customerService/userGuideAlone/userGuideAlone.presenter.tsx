import * as R from "react-native";
import * as S from "./userGuideAlone.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import UserGuideTopImage from "../../../../../assets/customerService/user-guide-top.svg";
import UserGuideMap from "../../../../../assets/customerService/user-guide-map.svg";
import UserGuideReserveCheck from "../../../../../assets/customerService/user-guide-reserve-check.svg";
import UserGuideInsuranceChoice from "../../../../../assets/customerService/user-guide-insurance-choice.svg";
import UserGuidePaymentCheck from "../../../../../assets/customerService/user-guide-payment-check.svg";
import Contents1Text from "../../../commons/text/Contents1Text";
import TitleText from "../../../commons/text/TitleText";
import CustomerService from "../../../commons/navigationHeader/customerService/csHeader";

export default function UserGuideAlonePageUI(props) {
   return (
      <>
         <CustomerService onPress={props.onPress}>
            CarpicK 이용 가이드
         </CustomerService>
         <R.ScrollView showsVerticalScrollIndicator={false}>
            <S.ImageBox style={{ height: 200 }}>
               <UserGuideTopImage />
            </S.ImageBox>
            <S.Wrapper style={globalStyles.GlobalStyles}>
               <S.ContentBox>
                  <S.ImageBox style={{ marginTop: 80 }}>
                     <UserGuideMap />
                  </S.ImageBox>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5d8bff">
                        카픽존에서 대여
                     </TitleText>
                  </S.TitleTextBox>
                  <S.SubTextBox>
                     <Contents1Text fontSize="10">
                        파란색 핀으로 표시된 카픽존에서 원하는 차량과 시간을
                        선택하세요.
                     </Contents1Text>
                     <Contents1Text fontSize="10">
                        해당 카픽존에서 차량의 대여와 반납이 모두 이루어집니다.
                     </Contents1Text>
                  </S.SubTextBox>
               </S.ContentBox>
               <S.ContentBox>
                  <S.ImageBox>
                     <UserGuideReserveCheck />
                  </S.ImageBox>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5d8bff">
                        차량 정보 확인
                     </TitleText>
                  </S.TitleTextBox>
                  <S.SubTextBox>
                     <Contents1Text fontSize="10">
                        선택된 차량의 주행요금과 유종을 확인하세요.
                     </Contents1Text>
                     <Contents1Text fontSize="10">
                        차량이미지를 누르면 해당 차량의 옵션을 확인할 수
                        있습니다.
                     </Contents1Text>
                  </S.SubTextBox>
               </S.ContentBox>
               <S.ContentBox>
                  <S.ImageBox>
                     <UserGuideInsuranceChoice />
                  </S.ImageBox>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5d8bff">
                        차량손해면책 상품 선택
                     </TitleText>
                  </S.TitleTextBox>
                  <S.SubTextBox>
                     <Contents1Text fontSize="10">
                        운행 중 사고로 인하여 대리하신 차량을 수리할 경우
                     </Contents1Text>
                     <Contents1Text fontSize="10">
                        예약자가 부담해야 할 최대 한도 금액(자기부담금)을 선택해
                        주세요.
                     </Contents1Text>
                  </S.SubTextBox>
               </S.ContentBox>
               <S.ContentBox>
                  <S.ImageBox>
                     <UserGuidePaymentCheck />
                  </S.ImageBox>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5d8bff">
                        결제 요금 확인
                     </TitleText>
                  </S.TitleTextBox>
                  <S.SubTextBox>
                     <Contents1Text fontSize="10">
                        예약 완료 시 결제되는 대여 요금, 면책상품 요금 등을
                        확인하세요.
                     </Contents1Text>
                     <Contents1Text fontSize="10">
                        주행요금은 선불 결제됩니다.
                     </Contents1Text>
                  </S.SubTextBox>
               </S.ContentBox>
            </S.Wrapper>
         </R.ScrollView>
      </>
   );
}
