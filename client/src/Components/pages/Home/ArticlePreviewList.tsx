import { FC } from "react";
import { gql, useQuery } from "@apollo/client";

import { StyledArticleList } from "./ArticlePreviewList.styles";
import ArticlePreview from "./ArticlePreview";


const ARTICLES_PREVIEW_QUERY = gql`
    query Articles {
        articles {
        id
        title
        preview
        }
    }
`;


const ArticleList: FC = props => {
    const { loading, error, data } = useQuery(ARTICLES_PREVIEW_QUERY);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Sorry, somthing went wrong.</p>;
    
    return (
        <StyledArticleList>
            { 
                data.articles.map( ({ id, title, preview }: any) => (
                        <ArticlePreview key={id} id={id} title={title} contentPreview={preview} />
                    )
                )
            }
        </StyledArticleList>
    );
}

export default ArticleList;