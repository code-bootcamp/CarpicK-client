import * as R from "react-native";
import * as S from "./Reserve.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import CustomerService from "../../../commons/navigationHeader/customerService/csHeader";
import { IReserveUIProps } from "./Reserve.types";

export default function ReserveUI(props: IReserveUIProps) {
   return (
      <>
         <CustomerService onPress={props.onPress}>
            예약 변경 및 예약 취소 / 취소수수료
         </CustomerService>
         <S.Wrapper style={globalStyles.GlobalStyles}>
            <R.ScrollView showsVerticalScrollIndicator={false}>
               <S.Contents>
                  <S.TitleTextBox>
                     <TitleText fontSize="12" color="#5D8BFF">
                        예약 변경은 어떻게 하나요?
                     </TitleText>
                  </S.TitleTextBox>
                  <S.ContentsBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           차량 예약 후 카픽 앱에서 [대여 시각 앞당기기] 또는
                           [반납 시각 연장하기]가 가능합니다. 차량 대여/반납
                           장소 변경, 차종, 면책 상품 등을 변경해야 할 때는 기존
                           예약을 취소하고 다시 예약해주세요.
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 예약 취소 방법
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           카픽 앱 ︎￫ 우측 상단의 [메뉴] ► [이용내역] ► 예약
                           시간을 변경하고자 하는 예약 건 선택 ► 이용시간
                           [변경하기] ► [대여 시각 앞당기기] 혹은 [반납 시간
                           연장하기]
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.MiniTitleTextBox>
                        <TitleText fontSize="10" color="#000">
                           ￭ 취소수수료 안내
                        </TitleText>
                     </S.MiniTitleTextBox>
                     <S.SubTextBox>
                        <Contents1Text fontSize="10" color="#353535">
                           취소수수료는 예약한 총 대여 시간과 취소 시점에 따라
                           달라집니다.
                        </Contents1Text>
                        <Contents1Text fontSize="10" color="#353535">
                           취소수수료는 대여요금과 차량손해면책 상품 구 다지를
                           합한 금액의 정상요금을 기준으로 계산합니다.
                        </Contents1Text>
                     </S.SubTextBox>
                     <S.SubTextBox>
                        <S.MiniTitleTextBox>
                           <Contents1Text fontSize="10">
                              ✔ 예약, 결제 완료 후 30분 안에 취소하면 아래 표에
                              나오는 기준과 관계없이 수수료가 없습니다. 단, 대여
                              시간이 시작되고 나면 수수료가 발생합니다.
                           </Contents1Text>
                        </S.MiniTitleTextBox>
                        <S.MiniTitleTextBox>
                           <Contents1Text fontSize="10">
                              ✔ 대여 시간이 시작되고 나면 차를 실제로
                              운행했는지와 관계없이 지나간 시간에 대한 요금을
                              돌려드릴 수 없습니다. 취소수수료는 남은 대여
                              시간을 기준으로 계산합니다.
                           </Contents1Text>
                        </S.MiniTitleTextBox>
                     </S.SubTextBox>
                  </S.ContentsBox>
               </S.Contents>
               <S.Contents>
                  <S.Line></S.Line>
                  <S.TableHeader>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">
                           취소 시점 / 총 대여 시간
                        </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">24시간 이하</Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">24시간 초과</Contents1Text>
                     </S.TableTextBox>
                  </S.TableHeader>
                  <S.Line></S.Line>
                  <S.TableBody>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">
                           대여 시작 6시간 전까지{" "}
                        </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">없음</Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">없음</Contents1Text>
                     </S.TableTextBox>
                  </S.TableBody>
                  <S.Line></S.Line>
                  <S.TableBody>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">
                           대여 시작 6시간 전{" "}
                        </Contents1Text>
                        <Contents1Text fontSize="10">~ 3시간 전 </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">없음</Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">15%</Contents1Text>
                     </S.TableTextBox>
                  </S.TableBody>
                  <S.Line></S.Line>
                  <S.TableBody>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">
                           대여 시작 3시간 전{" "}
                        </Contents1Text>
                        <Contents1Text fontSize="10">
                           ~ 대여 시작 전까지{" "}
                        </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">15%</Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">15%</Contents1Text>
                     </S.TableTextBox>
                  </S.TableBody>
                  <S.Line></S.Line>
                  <S.TableBody>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">
                           대여 시작 이후{" "}
                        </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">정상요금 +</Contents1Text>
                        <Contents1Text fontSize="10">
                           남은 시간 요금의 30%
                        </Contents1Text>
                     </S.TableTextBox>
                     <S.TableTextBox>
                        <Contents1Text fontSize="10">정상요금 +</Contents1Text>
                        <Contents1Text fontSize="10">
                           남은 시간 요금의 30%
                        </Contents1Text>
                     </S.TableTextBox>
                  </S.TableBody>
                  <S.Line></S.Line>
               </S.Contents>
            </R.ScrollView>
         </S.Wrapper>
      </>
   );
}
