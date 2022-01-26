import { FC } from "react";

import { StyledArticle, StyledAuthor, StyledContent, StyledMain, StyledTitle } from "../Arcticle/Article.styles";
import { StyledFooter } from "./NewArticlePreview.styles";
import Portal from "src/Components/UI/Portal";

interface Props {
    title: string,
    content: string,
    authorName: string,
    onClosePreview?: () => void,
}

const NewArticlePreview: FC<Props> = ({ title, content, authorName, onClosePreview }) => {
    
  return (
        <Portal onClick={onClosePreview}>
            <StyledMain>
                <StyledArticle>
                    <StyledTitle>{title}</StyledTitle>
                    <StyledContent>{content}</StyledContent>
                    <StyledAuthor>written by {authorName}</StyledAuthor>
                </StyledArticle>
            </StyledMain>
            <StyledFooter>Click anywhere to go end the preview</StyledFooter>
        </Portal>
  );
};


export default NewArticlePreview;