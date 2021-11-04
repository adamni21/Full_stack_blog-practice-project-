import styled from "styled-components";


interface CardProps {
    readonly backgroundColor?: string;
}

export const StyledCard = styled.div <CardProps> `
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: 3rem;
    padding: 2rem;
    background-color: ${props => props.backgroundColor || "#ddd"};
`;