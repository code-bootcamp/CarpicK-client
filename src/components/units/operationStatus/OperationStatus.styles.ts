import styled from "@emotion/native";
import colors from "../../../commons/lib/colors";

export const Footer = styled.View`
   width: 100%;
   height: 70px;
   background-color: #edf2ff;
   border-top-color: ${colors.light_gray};
   border-top-width: 1.5px;
   justify-content: center;
`;

export const TitleWrapper = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0px 20px;
`;
