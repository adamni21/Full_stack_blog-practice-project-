import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router";
import {
  ArticleQuery,
  ArticleQueryVariables,
} from "src/operation-result-types";

import {
  StyledArticle,
  StyledAuthor,
  StyledContent,
  StyledMain,
  StyledTitle,
} from "./Article.styles";

const ARTICLE_QUERY = gql`
  query ArticleQuery($articleId: ID!) {
    article(article_id: $articleId) {
      title
      content
      author {
        first_name
      }
    }
  }
`;

const Article: FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    ArticleQuery,
    ArticleQueryVariables
  >(ARTICLE_QUERY, { variables: { articleId: id! } });

  if (loading)
    return (
      <StyledMain>
        <h2>Loading...</h2>
      </StyledMain>
    );
  if (error)
    return (
      <StyledMain>
        <h2>Sorry, somthing went wrong.</h2>
      </StyledMain>
    );
    const { title, content, author: {first_name: authorName} } = data!.article;

  return (
    <StyledMain>
      <StyledArticle>
        <StyledTitle>{title}</StyledTitle>
        <StyledContent>{content}</StyledContent>
        <StyledAuthor>written by {authorName}</StyledAuthor>
      </StyledArticle>
    </StyledMain>
  );
};

export default Article;
