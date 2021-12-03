import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router";

import { StyledArticle, StyledAuthor, StyledContent, StyledMain, StyledTitle } from "./Article.styles";

const ARTICLE_QUERY = gql`
  query Article($articleId: String!) {
    article(articleId: $articleId) {
      title
      content
      author_name
    }
  }
`;



const Article: FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {variables: {articleId: id}})
  
  if(loading) return <StyledMain><h2>Loading...</h2></StyledMain>
  if(error) return <StyledMain><h2>Sorry, somthing went wrong.</h2></StyledMain>

  const {title, content, author_name} = data.article;

  return (
    <StyledMain>
      <StyledArticle>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
        <StyledAuthor>written by {author_name}</StyledAuthor>
      </StyledArticle>
    </StyledMain>
  );
};


export default Article;