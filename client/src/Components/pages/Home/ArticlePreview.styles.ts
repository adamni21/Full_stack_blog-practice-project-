import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledTitle = styled.h2`
    text-align: left;
    font-size: 1.8rem;
    color: #233;
    margin: 0;
`;

export const StyledPreview = styled.p`
    margin: 0;
    text-align: left;
    color: #444;
`;

export const StyledArticle = styled.div`
    margin: 1.2rem 0;
`;

export const StyledLink = styled(Link)`
    color: #555;
    text-decoration-color: #444;

    &:hover {
        color: #bbb;
        text-decoration-color: unset;
    }
    &:active {
        color: #444;
        text-decoration-color: unset;
    }
`;