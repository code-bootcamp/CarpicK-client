import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
   align-items: center;
`;

export const CarList = styled.TouchableOpacity`
   width: 100%;
   margin-bottom: 10px;
   /* background-color: red; */
`;

export const CarListBody = styled.View`
   flex-direction: row;
   width: 100%;
`;

export const CarListFooter = styled.View`
   width: 100%;
   height: 20px;
   border-bottom-width: 1px;
   border-bottom-color: #d8d8d8;
   /* background-color: rebeccapurple; */
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
   width: 100px;
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
