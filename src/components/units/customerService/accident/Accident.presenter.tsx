import * as R from "react-native";
import * as S from "./Accident.styles";
import globalStyles from "../../../../commons/styles/globalStyle";
import TitleText from "../../../commons/text/TitleText";
import Contents1Text from "../../../commons/text/Contents1Text";
import PictureGuide1 from "../../../../../assets/customerService/accident-picture-guide1.svg";
import PictureGuide2 from "../../../../../assets/customerService/accident-picture-guide2.svg";
import PictureGuide3 from "../../../../../assets/customerService/accident-picture-guide3.svg";
import PictureGuide4 from "../../../../../assets/customerService/accident-picture-guide4.svg";
import CustomerService from "../../../commons/navigationHeader/customerService/csHeader";
import { IAccidentUIProps } from "./Accident.types";

export default function AccidentUI(props: IAccidentUIProps) {
   return (
      <>
         <CustomerService onPress={props.onPress}>
            사고 대처 및 보험 적용 안내
         </CustomerService>
         <S.Wrapper>
            <S.HeaderMenu>
               <S.TouchWrapper>
                  <S.AccidentMenuTouch>
                     <TitleText fontSize="14" color="#ffffff">
                        사고 대처 안내
                     </TitleText>
                  </S.AccidentMenuTouch>
                  <S.InsuranceMenuTouch onPress={props.onPressToInsurance}>
                     <TitleText fontSize="14">보험적용 안내</TitleText>
                  </S.InsuranceMenuTouch>
               </S.TouchWrapper>
            </S.HeaderMenu>
            <S.GlobalBox>
               <R.ScrollView showsVerticalScrollIndicator={false}>
                  <S.ConTentBox style={globalStyles.GlobalStyles}>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              대인·대차 교통사고
                           </TitleText>
                        </S.TitleTextBox>
                        <S.HowTo>
                           <Contents1Text fontSize="12">
                              ·사고 접수 (1661-4999)
                           </Contents1Text>
                           <Contents1Text fontSize="12">
                              ·사고 현장 촬영
                           </Contents1Text>
                           <Contents1Text fontSize="12">
                              ·상대방과 목격자의 인적사항 및 차량번호, 보험사
                              확인 후 메모
                           </Contents1Text>
                        </S.HowTo>
                        <S.Notice>
                           <Contents1Text fontSize="10" color="#A5A5A5">
                              부상자를 즉시 인근병원으로 후송하여 응급조치
                           </Contents1Text>
                        </S.Notice>
                     </S.Contents>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              자기차량 손상사고
                           </TitleText>
                        </S.TitleTextBox>
                        <S.HowTo>
                           <Contents1Text fontSize="12">
                              ·사고 접수 (1661-4999)
                           </Contents1Text>
                           <Contents1Text fontSize="12">
                              ·사고 현장 촬영
                           </Contents1Text>
                        </S.HowTo>
                     </S.Contents>
                     <S.Contents>
                        <S.TitleTextBox>
                           <TitleText fontSize="12" color="#5D8BFF">
                              차량사고 시 현장사진 촬영법
                           </TitleText>
                        </S.TitleTextBox>
                        <S.ImageBox>
                           <PictureGuide1 />
                        </S.ImageBox>
                        <S.ImageBox>
                           <PictureGuide2 />
                        </S.ImageBox>
                        <S.ImageBox>
                           <PictureGuide3 />
                        </S.ImageBox>
                        <S.ImageBox>
                           <PictureGuide4 />
                        </S.ImageBox>
                     </S.Contents>
                  </S.ConTentBox>
               </R.ScrollView>
            </S.GlobalBox>
         </S.Wrapper>
      </>
   );
}
