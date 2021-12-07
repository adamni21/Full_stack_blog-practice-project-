import { FC } from "react";

import { StyledArticle, StyledAuthor, StyledContent, StyledMain, StyledTitle } from "../Arcticle/Article.styles";
import Portal from "src/Components/UI/Portal";
import { StyledFooter } from "./NewArticlePreview.styles";


interface Props {
    title: string,
    content: string,
    author_name: string,
    onClick: () => void,
}



const NewArticlePreview: FC<Props> = ({ title, content, author_name, onClick }) => {
    
  return (
        <Portal onClick={onClick}>
            <StyledMain>
                <StyledArticle>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledContent>{content}</StyledContent>
                    <StyledAuthor>written by {author_name}</StyledAuthor>
                </StyledArticle>
            </StyledMain>
            <StyledFooter>Click anywhere to go end the preview</StyledFooter>
        </Portal>
  );
};


export default NewArticlePreview;