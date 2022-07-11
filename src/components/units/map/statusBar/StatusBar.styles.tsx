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
   width: ${(props) => props.barLength + "%"};
   height: 3px;
   background-color: #d8d8d8;
   position: absolute;
   left: 0;
`;

export const Bar = styled.View`
   width: ${(props) => props.barLength + "%"};
   left: ${(props) => props.barStart + "%"};
   height: 3px;
   background-color: #d8d8d8;
   position: absolute;
   z-index: 999;
`;

/* width: ${(props) => props.barLength + "%"}; */
