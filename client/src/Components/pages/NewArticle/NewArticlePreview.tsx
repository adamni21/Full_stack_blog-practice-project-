import { FC } from "react";

import { StyledArticle, StyledAuthor, StyledContent, StyledMain, StyledTitle } from "../Arcticle/Article.styles";
import { StyledFooter } from "./NewArticlePreview.styles";
import Portal from "src/Components/UI/Portal";

interface Props {
    title: string,
    content: string,
    author_name: string,
    onClosePreview?: () => void,
}

const NewArticlePreview: FC<Props> = ({ title, content, author_name, onClosePreview }) => {
    
  return (
        <Portal onClick={onClosePreview}>
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