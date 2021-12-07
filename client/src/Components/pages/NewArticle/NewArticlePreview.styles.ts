import styled from "styled-components";

export const StyledFooter = styled.footer`
    position: fixed;
    font-size: 1.2rem;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem 2rem;
    background-color: #2222;
    border-radius: .5rem .5rem 0 0;

    &:hover {
        visibility: collapse;
    }
`;