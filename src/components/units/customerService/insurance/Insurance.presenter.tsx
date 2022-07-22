import * as R from "react-native";
import * as S from "./Insurance.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import CustomerService from "../../../commons/navigationHeader/customerService/csHeader";
import { IInsuranceUIProps } from "./Insurance.types";

export default function InsuranceUI(props: IInsuranceUIProps) {
   return (
      <>
         <CustomerService onPress={props.onPress}>
            사고 대처 및 보험 적용 안내
         </CustomerService>
         <S.Wrapper>
            <S.HeaderMenu>
               <S.TouchWrapper>
                  <S.AccidentMenuTouch onPress={props.onPressAccident}>
                     <TitleText fontSize="14">사고 대처 안내</TitleText>
                  </S.AccidentMenuTouch>
                  <S.InsuranceMenuTouch>
                     <TitleText fontSize="14" color="#ffffff">
                        보험적용 안내
                     </TitleText>
                  </S.InsuranceMenuTouch>
               </S.TouchWrapper>
            </S.HeaderMenu>
            <S.GlobalBox>
               <R.ScrollView showsVerticalScrollIndicator={false}>
                  <S.ConTentBox style={globalStyles.GlobalStyles}>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              카픽 보험 적용 안내
                           </TitleText>
                        </S.TitleTextBox>
                        <S.ContentsBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 카픽은 이용 중 발생할 수 있는 사고로부터
                                 회원님과 상대방의 피해를 보장하기 위해 전 차량
                                 자손, 대인, 대물 피해를 보상하는 자동차 종합
                                 보험에 가입하고 있습니다.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 또한 카픽 차량의 피해에 대해 회원님의 부담을
                                 덜어드리기 위해 자동차종합보험과는 별개로 카픽
                                 차량손해면책제도를 운영하고 있습니다.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 카픽 차량 대여 계약 체결 시 차량손해면책 상품은
                                 필수로 가입해야 하며, 서비스별 면책금의 한도를
                                 직접 선택하여 가입할 수 있습니다.
                              </Contents1Text>
                           </S.SubTextBox>
                        </S.ContentsBox>
                     </S.Contents>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              자동차 종합보험
                           </TitleText>
                        </S.TitleTextBox>
                        <S.ContentsBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 카픽의 모든 차량은 자손/대인/대물의 피해를
                                 보상하는 자동차종합보험에 가입되어 있으며, 사고
                                 발생 시 보장 범위는 아래와 같습니다.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.Line></S.Line>
                           <S.TableHeader>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="12">
                                    항목
                                 </Contents1Text>
                              </S.TableTextBox>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="12">
                                    보험한도
                                 </Contents1Text>
                              </S.TableTextBox>
                           </S.TableHeader>
                           <S.Line></S.Line>
                           <S.TableBody>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="12">
                                    자손
                                 </Contents1Text>
                                 <Contents1Text fontSize="10">
                                    운전자 자신이 다친 부분
                                 </Contents1Text>
                              </S.TableTextBox>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="10">
                                    1천 5백만원
                                 </Contents1Text>
                              </S.TableTextBox>
                           </S.TableBody>
                           <S.Line></S.Line>
                           <S.TableBody>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="12">
                                    대인
                                 </Contents1Text>
                                 <Contents1Text fontSize="10">
                                    사고 상대방의 인명 피해
                                 </Contents1Text>
                              </S.TableTextBox>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="10">
                                    무한
                                 </Contents1Text>
                              </S.TableTextBox>
                           </S.TableBody>
                           <S.Line></S.Line>
                           <S.TableBody>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="12">
                                    대물
                                 </Contents1Text>
                                 <Contents1Text fontSize="10">
                                    사고 상대방의 물적 피해
                                 </Contents1Text>
                              </S.TableTextBox>
                              <S.TableTextBox>
                                 <Contents1Text fontSize="10">
                                    1억 원
                                 </Contents1Text>
                              </S.TableTextBox>
                           </S.TableBody>
                           <S.Line></S.Line>
                        </S.ContentsBox>
                     </S.Contents>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              차량손해면책제도
                           </TitleText>
                        </S.TitleTextBox>
                        <S.ContentsBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 차량 대여 계약 체결 시 선택한 면책 상품에 따라
                                 사고 발생 시 카픽 차량 수리 비용에 대해
                                 회원님이 부담해야 할 최대 금액(자기부담금)이
                                 정해집니다.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 차량 수리 비용이 자기부담금을 초과하더라도
                                 선택한 면책 상품에서 정한 자기부담금만큼만
                                 지불하시면 됩니다. (자기부담금 미만일 경우 실비
                                 정산)
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 차량손해면책제도의 보장 범위는 차량 수리 비용
                                 및 휴차보상료이며, 긴급출동, 견인, 구난 등 현장
                                 처리 비용은 보장 범위에서 제외됩니다.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 면책 상품 및 면책 보험료는 카픽에서 제공하는
                                 서비스, 지역, 차종, 대여 기간 및 회원 특성 등에
                                 따라 상이할 수 있습니다. 대여 계약 체결 시 꼭
                                 확인해 주세요.
                              </Contents1Text>
                           </S.SubTextBox>
                           <S.SubTextBox>
                              <Contents1Text fontSize="10" color="#353535">
                                 차량손해면책 상품에 가입이 되어있더라도
                                 차량손해면책제도 이용약관 제5조 금지조항에
                                 해당하는 행위가 적발된 경우 차량손해면책제도
                                 적용이 불가하며, 사고처리비용 및 휴차보상료
                                 전액과 손해배상 비용이 청구됩니다. 또한 법적
                                 고발 및 이용 불가 조치가 행해질 수 있으니, 이
                                 점 유의해주시기 바랍니다.
                              </Contents1Text>
                           </S.SubTextBox>
                        </S.ContentsBox>
                     </S.Contents>
                  </S.ConTentBox>
               </R.ScrollView>
            </S.GlobalBox>
         </S.Wrapper>
      </>
   );
}
