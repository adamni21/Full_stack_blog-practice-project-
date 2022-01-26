import { FC } from "react";
import { gql, useQuery } from "@apollo/client";

import {
  StyledArticleList,
  StyledButton,
  StyledContainer,
} from "./ArticlePreviewList.styles";
import ArticlePreview from "./ArticlePreview";
import { GetArticles, GetArticlesVariables } from "src/operation-result-types";

const ARTICLES_PREVIEW_QUERY = gql`
  query GetArticles($pagination: PaginationInput) {
    articles(pagination: $pagination) {
      title
      preview
      id
    }
  }
`;

const ArticleList: FC = (props) => {
  const { loading, error, data, fetchMore } = useQuery<
    GetArticles,
    GetArticlesVariables
  >(ARTICLES_PREVIEW_QUERY, {
    variables: {
      pagination: {
        take: 5,
      },
    },
  });
  const loadMoreClickHandler = () =>
    fetchMore({
      variables: { pagination: { take: 3, skip: data!.articles.length } },
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sorry, somthing went wrong.</p>;

  return (
    <StyledArticleList>
      {data!.articles.map(({ id, title, preview }: any) => (
        <ArticlePreview
          key={id}
          id={id}
          title={title}
          contentPreview={preview}
        />
      ))}
      <StyledContainer>
        <StyledButton onClick={loadMoreClickHandler}>Load More</StyledButton>
      </StyledContainer>
    </StyledArticleList>
  );
};

export default ArticleList;
