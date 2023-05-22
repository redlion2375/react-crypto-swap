import styled from "styled-components";

interface StyledMaskProps {
    position? : string;
    content? : string;
    top? : number;
    left? : number;
    height? : string;
    width? : string;
    backgroundColor: string;
    zIndex: number;
}


const MaskContainer = styled.div<StyledMaskProps>`
  position: relative;
`;

const MaskOverlay = styled.div<StyledMaskProps>`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* The last value (0.5) is the opacity */
  z-index: 1; /* Make sure overlay is above the wrapped component */
`;

export {MaskContainer, MaskOverlay};