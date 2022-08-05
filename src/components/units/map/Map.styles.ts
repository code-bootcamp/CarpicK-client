import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
   align-items: center;
`;

export const AddressBox = styled.View`
   background-color: ${colors.theme};
   padding: 2px 7px;
   margin-right: 5px;
`;

export const CarList = styled.TouchableOpacity`
   width: 100%;
   margin-bottom: 10px;
`;

export const CarListBody = styled.View`
   flex-direction: row;
   width: 100%;
   margin-bottom: 5px;
`;

export const CarListFooter = styled.View`
   width: 100%;
   height: 25px;
   border-bottom-width: 1px;
   border-bottom-color: #e0e0e0;
`;

export const CarListTextWrapper = styled.View`
   width: 100%;
`;
export const CarCostPerHour = styled.View`
   width: 65%;
   flex-direction: row;
   justify-content: flex-end;
`;

export const CarImage = styled.Image`
   height: 80px;
   width: 80px;
   border-radius: 10px;
   margin-right: 15px;
`;

export const DateNote = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: center;
   position: relative;
`;

export const StartDate = styled.Text`
   position: absolute;
   font-size: 8px;
   color: #828282;
   left: 0;
`;

export const MiddleHour = styled.Text`
   color: #828282;
   font-size: 8px;
`;

export const EndDate = styled.Text`
   position: absolute;
   font-size: 8px;
   color: #828282;
   right: 0;
`;
