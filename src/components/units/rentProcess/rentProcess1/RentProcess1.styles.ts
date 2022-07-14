import styled from "@emotion/native";
import colors from "../../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
`;

export const HeaderWrapper = styled.View`
   width: 100%;
   height: 240px;
   background-color: #ffffff;
   padding: 0px 20px;
   align-items: center;
`;

export const CarImage = styled.Image`
   width: 100%;
   height: 132px;
   /* background-color: red; */
`;

export const TextWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   margin-top: 35px;
`;

export const PlaceWrapper = styled.View`
   width: 100%;
   height: 145px;
   background-color: #ffffff;
   padding: 20px 20px 25px 20px;
   margin-top: 10px;
`;

export const TimeWrapper = styled.View`
   width: 100%;
   height: 115px;
   background-color: #ffffff;
   padding: 20px 20px 25px 20px;
   margin-top: 10px;
`;

export const TitleWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 17.5px;
`;

export const TimeTextWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 17.5px;
   align-items: center;
`;

export const TouchTimeChange = styled.TouchableOpacity`
   flex-direction: row;
   justify-content: space-between;
`;

export const BodyRentPlace = styled.View`
   width: 100%;
   flex-direction: row;
   margin: 7.5px 0px;
`;

export const BodyReturnPlace = styled.View`
   width: 100%;
   flex-direction: row;
   margin: 7.5px 0px;
`;

export const RentLabel = styled.View`
   width: 36px;
   height: 18px;
   background-color: ${colors.theme};
   justify-content: center;
   align-items: center;
   margin-right: 10px;
`;

export const ReturnLabel = styled.View`
   width: 36px;
   height: 18px;
   background-color: ${colors.theme_dark};
   justify-content: center;
   align-items: center;
   margin-right: 10px;
`;

export const ButtonWrapper = styled.View`
   width: 100%;
   height: 80px;
   background-color: #ffffff;
   flex-direction: row;
   padding: 20px;
   justify-content: space-between;
   border-top-width: 1px;
   border-top-color: ${colors.light_gray};
`;

export const ButtonTextLeftWrapper = styled.View`
   height: 60px;
`;

export const ButtonNext = styled.TouchableOpacity`
   width: 90px;
   height: 45px;
   background-color: ${colors.theme};
   justify-content: center;
   align-items: center;
`;

export const InsuranceWrapper = styled.View`
   width: 100%;
   height: 400px;
   background-color: #ffffff;
   padding: 20px 20px 25px 20px;
   margin-top: 10px;
   margin-bottom: 50px;
`;

export const InsuranceTextWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-bottom: 17.5px;
   align-items: center;
`;

export const RadioWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const RadioLeft = styled.View`
   flex-direction: row;
   align-items: center;
`;
