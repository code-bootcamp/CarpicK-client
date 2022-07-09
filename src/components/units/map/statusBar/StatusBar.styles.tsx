import styled from "@emotion/native";
export const Wrapper = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   position: relative;
`;

export const FullStatusBar = styled.View`
   width: 100%;
   height: 3px;
   background-color: #5d8bff;
   z-index: -1;
   position: absolute;
`;

export const PrefixBar = styled.View`
   width: 72.5%;
   height: 3px;
   background-color: #d8d8d8;
`;

export const Bar = styled.View`
   width: ${(props) => props.barLength + "%"};
   margin-left: ${(props) => props.barStart + "%"};
   height: 3px;
   background-color: #d8d8d8;
   position: absolute;
   z-index: 999;
`;
