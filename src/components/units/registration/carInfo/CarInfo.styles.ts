import styled from "@emotion/native";
import colors from "../../../../commons/lib/colors";

export const Wrapper = styled.View`
   flex: 1;
   padding: 20px 0;
`;

export const InputBox = styled.View`
   margin-top: 10px;
   text-align: left;
`;

export const InputDefault = styled.View`
   margin-top: 10px;
   width: 100%;
   height: 35px;
   padding: 0 5px;
   justify-content: center;
   border-radius: 5px;
   background-color: #f0f0f0;
`;

export const SubtitleWrapper = styled.View`
   flex-direction: row;
`;

export const RedDot = styled.View`
   margin-top: 2px;
   margin-left: 2px;
   width: 4px;
   height: 4px;
   border-radius: 2px;
   background-color: tomato;
`;
