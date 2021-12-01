import { FC } from "react";
import { StyledArticle, StyledArticleTitle, StyledPreview, } from "./ArticlePreview.styles";

interface Props {
    title: string,
    content: string,
    id: string
};

const Article: FC<Props> = props => {
    
    let contentPreview = props.content.slice(0, 100);
    
    if (contentPreview[99] === " ") contentPreview = contentPreview.slice(0, 99)
    if (contentPreview.slice(-1) === ".") contentPreview = contentPreview.slice(0, -1)

    return (
        <StyledArticle>
            <StyledArticleTitle>{props.title}</StyledArticleTitle>
            <StyledPreview>{contentPreview}... <a href={`entry_${props.id}`}>read more</a></StyledPreview>
        </StyledArticle>
    )
}

export default Article;