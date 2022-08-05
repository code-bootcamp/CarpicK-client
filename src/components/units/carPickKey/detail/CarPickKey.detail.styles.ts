import styled from "@emotion/native";

export const Wrapper = styled.View`
   flex: 1;
`;

export const Container = styled.ScrollView`
   flex: 1;
   padding: 20px 0;
   background-color: white;
`;

export const CarImage = styled.Image`
   width: 150px;
   height: 150px;
`;

export const BodyPlace = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   margin: 7.5px 0px;
`;

export const PlaceLabel = styled.View`
   width: 38px;
   height: 20px;
   background-color: ${(props: { backgroundColor: string }) =>
      props.backgroundColor};
   justify-content: center;
   align-items: center;
   margin-right: 10px;
`;

export const TitleWrapper = styled.View`
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
`;

export const TouchCancel = styled.TouchableOpacity`
   width: 55px;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;
