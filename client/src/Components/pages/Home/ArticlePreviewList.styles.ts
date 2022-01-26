import styled from "styled-components";
import { StyledButton as BtnTmplt } from "../NewArticle/NewArticle.styles";

export const StyledButton = styled(BtnTmplt)`
 margin: 1rem 0 2rem ;
 background-color: #e2e2e2;
 color: #555;
 padding: .5rem;
 font-weight: 500;
 font-size: 1rem;
 border: 3px, #aaa solid;
 &:hover {
     background-color: #e8e8e8;
     color: #666;
 }
`;

export const StyledContainer = styled.div`
 text-align: left;
`;

export const StyledArticleList = styled.div`
    margin-top: 2.5rem;
`;