import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 5%;
    padding: 0 4rem;
    box-sizing: border-box;
    width: 90%;
    height: 5rem;
    border-radius: 0 0 1rem 1rem;
    background-image: linear-gradient(135deg, #ddd 0%, #ccc 50%, #ddd 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledBlogTitle = styled.h1`
    color: ${props => props.color || "#333"};
    margin: 0;
`;

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    background-color: #0001;
    padding: 1rem;
    border-radius: .5rem;

    & > * {
        margin: 0 .8rem;
    }
`;