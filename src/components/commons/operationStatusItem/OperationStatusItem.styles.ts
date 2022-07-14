import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";
import Contents1Text from "../text/Contents1Text";

export const Wrapper = styled.View`
   padding: 10px 0;
`;

export const Container = styled.View`
   height: 160px;
   flex: 1;
   flex-direction: row;
   background-color: white;
   border-radius: 15px;
   overflow: hidden;
`;

export const StatusContainer = styled.View`
   width: 40px;
   justify-content: center;
   align-items: center;
   background-color: ${(props: { backgroundColor: any }) =>
      props.backgroundColor};
`;

export const StatusText = styled.Text`
   text-align: center;
   font-size: 16px;
   color: white;
   line-height: 32px;
`;

export const ContentsContainer = styled.View`
   flex: 1;
   flex-direction: row;
   padding: 10px;
`;

export const CarInfoContainer = styled.View`
   width: 120px;
   justify-content: center;
   align-items: center;
`;

export const CarImage = styled.Image`
   width: 100%;
   height: 55px;
`;

export const ReservationContainer = styled.View`
   flex-grow: 1;
   justify-content: center;
   margin-left: 10px;
`;

export const LocationBox = styled.View`
   flex-direction: row;
   align-items: center;
   margin-top: 20px;
`;
