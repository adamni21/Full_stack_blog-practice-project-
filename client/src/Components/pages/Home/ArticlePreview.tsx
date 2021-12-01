import { FC } from "react";

import { StyledArticle, StyledTitle, StyledPreview, } from "./ArticlePreview.styles";

interface Props {
    title: string,
    contentPreview: string,
    id: string
};

const ArticlePreview: FC<Props> = props => {
    
    return (
        <StyledArticle>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledPreview>
                {props.contentPreview}... <a href={`entry/${props.title.replaceAll(" ", "-")}_${props.id}`}>read more</a>
            </StyledPreview>
        </StyledArticle>
    )
}

export default ArticlePreview;