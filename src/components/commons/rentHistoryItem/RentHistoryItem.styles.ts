import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const Wrapper = styled.View``;

export const Container = styled.View`
   height: 160px;
   flex-direction: row;
   background-color: white;
   overflow: hidden;
   border-top-width: 0.7px;
   border-top-color: ${colors.light_gray};
   border-bottom-width: 0.7px;
   border-bottom-color: ${colors.light_gray};
   margin: 7.5px 0px;
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
   padding: 15px 0px;
`;

export const CarInfoContainer = styled.View`
   width: 120px;
   align-items: center;
`;

export const CarImage = styled.Image`
   border-radius: 10px;
   width: 80px;
   height: 80px;
`;

export const ReservationContainer = styled.View`
   flex-grow: 1;
   margin-left: 10px;
`;

export const LocationBox = styled.View`
   flex-direction: row;
   align-items: center;
   margin-top: 20px;
   margin-bottom: 5px;
`;

export const StatusContainer = styled.View`
   width: 48px;
   height: 18px;
   justify-content: center;
   align-items: center;
   background-color: ${(props: { backgroundColor: any }) =>
      props.backgroundColor};
   margin-bottom: 10px;
`;
