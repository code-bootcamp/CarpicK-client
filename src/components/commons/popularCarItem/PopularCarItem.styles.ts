import styled from "@emotion/native";
import { Rating } from "react-native-ratings";

export const Wrapper = styled.View`
   padding: 10px 0;
`;

export const Container = styled.View`
   height: 180px;
   flex: 1;
   flex-direction: row;
   background-color: white;
   border-radius: 15px;
   overflow: hidden;
`;

export const MedalBox = styled.View`
   position: absolute;
   top: 0;
   right: 10px;
`;

export const CarInfoContainer = styled.View`
   width: 120px;
   justify-content: center;
   align-items: center;
   margin-left: 10px;
`;

export const CarImage = styled.Image`
   width: 100%;
   height: 55px;
`;

export const ContentsContainer = styled.View`
   flex-grow: 1;
   justify-content: center;
   margin-left: 10px;
`;

export const LocationBox = styled.View`
   flex-direction: row;
   align-items: center;
   margin-top: 12px;
`;

export const RatingBox = styled.View`
   flex-direction: row;
   align-items: center;
   margin-top: 15px;
`;

export const CarRating = styled(Rating)`
   margin-left: 10px;
`;
