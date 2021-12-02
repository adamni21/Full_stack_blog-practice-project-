import { FC } from "react";

import { StyledArticle, StyledTitle, StyledPreview, StyledLink, } from "./ArticlePreview.styles";

interface Props {
    title: string,
    contentPreview: string,
    id: string
};

const ArticlePreview: FC<Props> = props => {
    const url = `../article/${props.title.toLocaleLowerCase().replaceAll(" ", "-")}_${props.id}`;
    
    return (
        <StyledArticle>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledPreview>
                {props.contentPreview}... <StyledLink to={url}>read more</StyledLink>
            </StyledPreview>
        </StyledArticle>
    )
}

export default ArticlePreview;