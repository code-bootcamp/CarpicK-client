import styled from "@emotion/native";
import colors from "../../../../commons/lib/colors";

export const Wrapper = styled.View`
   width: 100px;
   height: 100px;
   border-radius: 15px;
   overflow: hidden;
`;

export const CarImage = styled.Image`
   width: 100%;
   height: 100%;
`;

export const Box = styled.TouchableOpacity`
   width: 100%;
   height: 100%;
   flex: 1;
   justify-content: center;
   align-items: center;
   border: 1px solid ${colors.gray};
   border-radius: 15px;
`;

export const RowLine = styled.View`
   position: absolute;
   width: 40px;
   height: 1px;
   background-color: ${colors.gray};
`;

export const ColumnLine = styled.View`
   position: absolute;
   width: 1px;
   height: 40px;
   background-color: ${colors.gray};
`;
