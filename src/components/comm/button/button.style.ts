import styled from "styled-components";

interface ButtonProps {
    $bg?: string;
    $color?: string;
    $borderRadius?:string;
    $backgroundColor?:string;
}

const StyledButton = styled.button<ButtonProps>`
    border:none;
    color:white;
    padding:1rem;
    cursor:pointer;
    ${({ $bg }) => $bg ? `background-color:${$bg};` : `background-color:#000000;`};
    ${({ $color }) => $color ? `color:${$color};` : `color:#ffffff;`};
    ${({ $borderRadius }) => $borderRadius ? `border-radius: ${ $borderRadius }` : `border-radius: 0`};
    ${({ $backgroundColor }) => $backgroundColor && `background-color: ${ $backgroundColor }`}
`

export default StyledButton;