/***************/
/* 차량 필터 전용 */
/***************/

import * as R from "react-native";
import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";
import SubTitleText from "../text/SubTitleText";
import { useEffect, useState } from "react";

/*   ===== 사용방법 =====
 *   const className = (selectedCar: string[]) => {
 *       console.log(selectedCar)
 *   }
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

export default function MultiRadio(props: IMultiRadioProps) {
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
}

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
   margin-top: 12px;
`;

const RadioButton = styled.TouchableOpacity`
   /* flex: 1; */
   width: ${(props: any) => props.radioWidth}px;
   height: 35px;
   justify-content: center;
   padding: 0 10px;
   margin-right: 7px;
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
