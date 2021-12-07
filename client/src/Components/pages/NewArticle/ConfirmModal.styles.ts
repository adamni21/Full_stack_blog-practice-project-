import styled from "styled-components";
import { StyledCard } from "src/Components/UI/Card.styles";

export const StyledModal = styled(StyledCard)`
    box-shadow: .1rem .3rem .5rem #0004;
    background-color: #fafafa;
    z-index: 51;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;

export const StyledMessage = styled.h2`
    color: #233;
`;

export const StyledFlex = styled.div`
    width: fit-content;
    display: flex;
    margin-left: auto;
`;

export const StyledButton = styled.button`
    border: none;
    border-radius: .3rem;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0 .5rem;
    padding: 1rem;
    color: #233;
    background-color: #e0e0e0;
    
    &:hover {
        background-color: #eee;
    }

    &:active {
        background-color: #ddd;
    }
`;