import * as R from "react-native";
import * as S from "./Return.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import CustomerService from "../../../commons/navigationHeader/customerService/csHeader";
import { IReturnUIProps } from "./Return.types";

export default function ReturnUI(props: IReturnUIProps) {
   return (
      <>
         <CustomerService onPress={props.onPress}>반납 가이드</CustomerService>
         <S.Wrapper style={globalStyles.GlobalStyles}>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.Contents>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5D8BFF">
                        반납은 어떻게 하나요?
                     </TitleText>
                  </S.TitleTextBox>
                  <S.ContentsBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           차량 이용이 완료되면 카픽 앱에서 반납할 수 있습니다.
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 반납하기
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           카픽 앱 ► 스마트키 ► [반납하기]
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 반납 시 꼭 확인하세요!
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           · 남은 주유량 / 충전량 확인
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           · 반드시 지정된 반납 장소에 주차
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           · 라이트 / 시동 OFF
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           · 창문이 모두 닫혔는지 확인
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           · 이용 후 발생된 쓰레기 수거
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           · 두고 내리는 물건은 없는지 확인
                        </Contents1Text>
                     </S.SubTextBox>
                  </S.ContentsBox>
               </S.Contents>
               <S.Contents>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5D8BFF">
                        반납이 늦어질 때, 반납 연장은 어떻게 하나요?
                     </TitleText>
                  </S.TitleTextBox>
                  <S.ContentsBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           반납이 예상보다 늦어질 경우 사전에 카픽 앱에서 혹은
                           운행 중 차량 내에서 꼭 연장하세요! 연장하지 않고 반납
                           시간을 초과하여 차량을 이용할 경우 페널티 요금이
                           부과됩니다.
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 반납 연장하기
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           ① 카픽 앱에서 연장하기 : 카픽 앱 [스마트키] ►
                           [연장하기]
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           ② 차량 내 카픽 태블릿에서 연장하기 : 메인 화면의
                           [예약 연장]
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <Contents1Text fontSize="10">
                           ✔ 예약 시간 변경은 다른 예약 시간과 중첩되지 않을
                           경우에만 가능하며, 예약 내역에서 10분 / 30분 / 60분
                           단위로 변경할 수 있습니다.
                        </Contents1Text>
                     </S.MiniTitleTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 반납 지연 페널티 안내
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           대여 종료시간 기준 10분 초과 : 페널티 1만원 및 지연
                           서비스 요금
                        </Contents1Text>
                     </S.SubTextBox>
                  </S.ContentsBox>
               </S.Contents>
            </R.ScrollView>
         </S.Wrapper>
      </>
   );
}
