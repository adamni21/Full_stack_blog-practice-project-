import styled from "styled-components";


interface CardProps {
    readonly backgroundColor?: string;
}

export const StyledCard = styled.div <CardProps> `
    box-sizing: border-box;
    border-radius: 1rem;
    padding: 2rem;
    background-color: ${props => props.backgroundColor || "#ddd"};
`;