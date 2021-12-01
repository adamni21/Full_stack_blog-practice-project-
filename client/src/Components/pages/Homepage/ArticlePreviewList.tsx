import { FC } from "react";
import { blog_entry } from "src/App";
import Article from "./ArticlePreview";
import { StyledArticleList } from "./ArticlePreviewList.styles";

interface Props {
    articles: blog_entry[],
};

const ArticleList: FC<Props> = props => {
    
    return (
        <StyledArticleList>
            { props.articles.map(article => <Article key={article.id} title={article.title} content={article.content} id={article.id}/>) }
        </StyledArticleList>
    );
}

export default ArticleList;