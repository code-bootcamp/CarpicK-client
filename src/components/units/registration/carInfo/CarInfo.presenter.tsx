import * as R from "react-native";
import * as S from "./CarInfo.styles";
import globalStyle from "../../../../commons/styles/globalStyle";
import Contents1Text from "../../../commons/text/Contents1Text";
import Input2 from "../../../commons/input/Input2";
import Radio from "../../../commons/radio/Radio";
import TitleText from "../../../commons/text/TitleText";
import { ICarInfoUIProps } from "./CarInfo.types";
import { Controller } from "react-hook-form";
import Button1 from "../../../commons/button/Button1";

export default function CarInfoUI(props: ICarInfoUIProps) {
   return (
      <R.View style={{ flex: 1 }}>
         <R.ScrollView style={{ backgroundColor: "#fff" }}>
            <S.Wrapper style={globalStyle.GlobalStyles}>
               <TitleText>{`카픽으로 손쉽게\n오너가 되어보세요!`}</TitleText>
               <R.View>
                  <S.InputBox>
                     <Contents1Text>이름</Contents1Text>
                     <Input2 placeholder="홍길동" disabled={false} />
                  </S.InputBox>
                  <S.InputBox>
                     <Contents1Text>전화번호</Contents1Text>
                     <Input2 placeholder="01012345678" disabled={false} />
                  </S.InputBox>
                  <R.View style={{ marginTop: 10 }}>
                     <S.InputBox>
                        <Contents1Text>차량번호</Contents1Text>
                        <Controller
                           control={props.control}
                           name="carNumber"
                           render={({ onChange }) => (
                              <Input2
                                 placeholder="12가3456"
                                 onChangeText={onChange}
                              />
                           )}
                           rules={{
                              required: true,
                           }}
                        />
                        {props.formState.errors?.carNumber && (
                           <Contents1Text color="red">
                              차량번호를 입력해주세요.
                           </Contents1Text>
                        )}
                     </S.InputBox>
                     <S.InputBox>
                        <Contents1Text>차종</Contents1Text>
                        <Controller
                           control={props.control}
                           name="carType"
                           render={({ onChange }) => (
                              <Input2
                                 placeholder="아반떼"
                                 onChangeText={onChange}
                              />
                           )}
                           rules={{
                              required: true,
                           }}
                        />
                        {props.formState.errors?.carType && (
                           <Contents1Text color="red">
                              차종을 입력해주세요.
                           </Contents1Text>
                        )}
                     </S.InputBox>
                     <R.View style={{ marginTop: 20 }}>
                        <Contents1Text>연료</Contents1Text>
                        <R.View style={{ marginTop: 7 }}>
                           <Radio
                              options={["휘발유", "경유", "LPG", "전기"]}
                              onChange={(option) => console.log(option)}
                           />
                        </R.View>
                     </R.View>
                     <R.View style={{ marginTop: 20 }}>
                        <Contents1Text>하이패스</Contents1Text>
                        <R.View style={{ marginTop: 7 }}>
                           <Radio
                              options={["장착", "미장착"]}
                              onChange={(option) => console.log(option)}
                           />
                        </R.View>
                     </R.View>
                  </R.View>
               </R.View>
            </S.Wrapper>
         </R.ScrollView>
         <Button1
            isDisabled={!props.formState.isValid}
            onPress={props.handleSubmit(props.onPressNext)}
         >
            다음
         </Button1>
      </R.View>
   );
}
