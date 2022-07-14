import * as R from "react-native";
import styled from "@emotion/native";
import { DrawerActions } from "@react-navigation/native";
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

export const Filter = (onPress) => {
   return (
      <FilterTouch onPress={() => onPress(DrawerActions.openDrawer())}>
         <FilterImageWrapper>
            <R.View>
               <FilterImage />
            </R.View>
         </FilterImageWrapper>
      </FilterTouch>
   );
};
