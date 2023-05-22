import React, { ReactNode } from 'react';
import styled from "styled-components";
// import { MaskContainer, MaskOverlay } from './mask.style';

interface MaskProps {
    children?:ReactNode;
    refValue?:any; 
    [key: string]: any;
}

interface StyledMaskProps {
    backgroundColor?: string;
    zIndex?: number;
  }

export const MaskContainer = styled.div<StyledMaskProps>`
  background-color: ${props => props.backgroundColor || 'rgba(0, 0, 0, 0.5)'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.zIndex || 100};
`;

export const MaskOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;


export default function Mask ({ children, refValue, ...rest }: MaskProps) {
    return(
        <MaskContainer ref={refValue} {...rest}>
            {
                children
            }
            <MaskOverlay />
        </MaskContainer>
    )
}