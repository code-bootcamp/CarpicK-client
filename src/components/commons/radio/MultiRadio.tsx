/***************/
/* 차량 필터 전용 */
/***************/

import * as R from "react-native";
import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";
import SubTitleText from "../text/SubTitleText";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

/*   ===== 사용방법(부모 컴포넌트 사용 예시) =====
 *   1. 변경할때마다 배열 return
 *   const className = (selectedCar: string[]) => {
 *       console.log(selectedCar)
 *   }
 *
 *   2. reset (useRef 사용)
 *   const resetRef = useRef({})
 *   버튼눌렀을때 -> () => resetRef.current.resetSelected()
 */

interface IMultiRadioProps {
   data?: any; // 'data?.fetchCarCategory'를 보내줘야함
   onChange: (selectedCar: string[]) => void; // 선택이 변경될때마다 배열로 return
}

interface ICategoryProps {
   id: string;
   name: string;
   carModel: [];
}

interface ICarModelProps {
   id: string;
   name: string;
}

export default forwardRef(function MultiRadio(props: IMultiRadioProps, ref) {
   const [selectedModel, setSelectedModel] = useState<string[]>([]);

   useEffect(() => {
      props.onChange(selectedModel);
   }, [selectedModel]);

   const checkModelIsSelected = (carModel: string) => () => {
      if (selectedModel.includes(carModel)) {
         // 이미 선택되어있음
         const temp = selectedModel.filter(
            (tempCarModel: string) => tempCarModel !== carModel
         );
         setSelectedModel(temp);
      } else {
         const selectedCarModel = [...selectedModel];
         selectedCarModel.push(carModel);
         setSelectedModel(selectedCarModel);
      }
   };

   const resetSelected = () => {
      setSelectedModel([]);
   };

   useImperativeHandle(ref, () => ({
      resetSelected,
   }));

   return (
      <Wrapper>
         {props.data?.map((category: ICategoryProps) => (
            <Container key={category.id}>
               <SubTitleText>{category.name}</SubTitleText>
               <RadioContainer>
                  {category.carModel.map((carModel: ICarModelProps) => (
                     <RadioButton
                        key={carModel.id}
                        activeOpacity={1}
                        onPress={checkModelIsSelected(carModel.name)}
                        isActive={selectedModel.includes(carModel.name)}
                     >
                        <ButtonText
                           isActive={selectedModel.includes(carModel.name)}
                        >
                           {carModel.name}
                        </ButtonText>
                     </RadioButton>
                  ))}
               </RadioContainer>
            </Container>
         ))}
      </Wrapper>
   );
});

const Wrapper = styled.ScrollView`
   margin: 30px 0;
`;

const Container = styled.View`
   flex: 1;
   padding: 20px 0;
   border-bottom-width: 0.7px;
   border-bottom-color: ${colors.light_gray};
`;

const RadioContainer = styled.View`
   flex-direction: row;
   flex-wrap: wrap;
`;

const RadioButton = styled.TouchableOpacity`
   width: ${(props: any) => props.radioWidth}px;
   height: 35px;
   justify-content: center;
   padding: 0 10px;
   margin-right: 7px;
   margin-top: 7px;
   border-radius: 5px;
   background-color: ${(props: any) =>
      props.isActive ? colors.theme : "white"};
   border: ${(props: any) =>
      props.isActive ? "none" : `1px solid ${colors.gray}`};
`;

const ButtonText = styled.Text`
   color: ${(props: any) => (props.isActive ? "white" : colors.gray)};
   font-size: 12px;
   text-align: center;
   line-height: 30px;
`;
