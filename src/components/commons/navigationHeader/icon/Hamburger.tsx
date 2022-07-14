import * as R from "react-native";
import styled from "@emotion/native";
import { DrawerActions } from "@react-navigation/native";
import HamburgerImage from "../../../../../assets/main/hamburger.svg";

const HamburgerTouch = styled.TouchableOpacity`
   width: 80px;
   height: 30px;
   margin-right: 20px;
   align-items: flex-end;
   justify-content: center;
`;

const HamburgerImageWrapper = styled.View`
   width: 65px;
   height: 30px;
   align-items: flex-end;
   justify-content: center;
`;

export const Hamburger = (onPress) => {
   return (
      <HamburgerTouch onPress={() => onPress(DrawerActions.openDrawer())}>
         <HamburgerImageWrapper>
            <R.View>
               <HamburgerImage />
            </R.View>
         </HamburgerImageWrapper>
      </HamburgerTouch>
   );
};
