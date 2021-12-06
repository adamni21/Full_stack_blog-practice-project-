import styled from "styled-components";


export const StyledMain = styled.main`
    text-align: left;
    box-sizing: border-box;
    background-color: #0000;
    margin: 4rem auto 0;
    border-radius: .3rem;
    width: 80%;
`;

export const StyledLabel = styled.label`
    display: block;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 700;
    color: #233;
    margin: .5rem 0 0 0;

    &.author {
        font-weight: 500;
        font-size: .8rem;
    }
`;

export const StyledInput = styled.input`
    margin-left: .5rem;
`;

export const StyledTextarea = styled.textarea`
    display: block;
    margin-left: .5rem;
    resize: vertical;
    width: 100%;
    max-width: 60rem;
    height: 20rem;
    min-height: 5rem;
`;

export const StyledButton = styled.button`
    border: none;
    border-radius: .3rem;
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0 0 .5rem;
    padding: 1rem;
    color: #233;
    background-color: #ccc;
    
    &:hover {
        background-color: #ddd;
    }

    &:active {
        background-color: #bbb;
    }
`;