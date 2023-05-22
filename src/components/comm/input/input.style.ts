import styled from "styled-components";

interface StyledInputProps {
    $border?: String;
    $background?: String;
    $width?: String;
    $height?: String;
}

const StyledInput = styled.input<StyledInputProps>`
    ${({ $border }) => $border && `border: ${ $border }`};
    ${({ $background }) => $background && `background: ${ $background }`};
    ${({ $width }) => $width && `border: ${ $width }`};
    ${({ $height }) => $height && `border: ${ $height }`};
    font-family:'__Roboto_08ace3', '__Roboto_Fallback_08ace3';
`


export default StyledInput;