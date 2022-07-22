import * as R from "react-native";
import styled from "@emotion/native";
import FilterImage from "../../../../../assets/main/Filter.svg";

const FilterTouch = styled.TouchableOpacity`
   width: 80px;
   height: 30px;
   margin-right: 20px;
   align-items: flex-end;
   justify-content: center;
`;

const FilterImageWrapper = styled.View`
   width: 65px;
   height: 30px;
   align-items: flex-end;
   justify-content: center;
`;

export const Filter = (navigation: any) => {
   return (
      <FilterTouch onPress={() => navigation.navigate("filter")}>
         <FilterImageWrapper>
            <R.View>
               <FilterImage />
            </R.View>
         </FilterImageWrapper>
      </FilterTouch>
   );
};
