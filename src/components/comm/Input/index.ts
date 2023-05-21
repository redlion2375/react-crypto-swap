import styled from 'styled-components'

const Input = styled.input`
    padding: 10px;
    border: none;
    border: 1px solid gray;
    box-shadow: 0 0 5px rgb(0, 0, 0);
    outline: none;

    &:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }
    
`;

export default Input;