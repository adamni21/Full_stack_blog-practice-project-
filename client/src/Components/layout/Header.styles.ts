import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    left: 5%;
    padding: 0 4rem;
    box-sizing: border-box;
    width: 90%;
    height: 5rem;
    border-radius: 0 0 1rem 1rem;
    background-image: linear-gradient(135deg, #bbb 0%, #aaa 50%, #bbb 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledTitle = styled.h1`
    color: ${props => props.color || "#333"};
    margin: 0;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    background-color: #0002;
    padding: 1rem;
    border-radius: .5rem;

    & > * {
        margin: 0 .8rem;
    }
`;