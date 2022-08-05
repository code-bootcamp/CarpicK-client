import styled from "@emotion/native";
export const Wrapper = styled.View`
   width: 100%;
   flex-direction: row;
   align-items: center;
   position: relative;
   margin-top: 5px;
`;

export const FullStatusBar = styled.View`
   width: 100%;
   height: 3px;
   background-color: #5d8bff;
   z-index: -1;
   position: absolute;
`;

export const PrefixBar = styled.View`
   width: ${(props: { barLength: string }) => props.barLength + "%"};
   height: 3px;
   background-color: #d8d8d8;
   position: absolute;
   left: 0;
`;

export const Bar = styled.View`
   width: ${(props: any) => props.barLength + "%"};
   left: ${(props: any) => props.barStart + "%"};
   height: 3px;
   background-color: #d8d8d8;
   position: absolute;
   z-index: 999;
`;
