

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ArticleQuery
// ====================================================

export interface ArticleQuery_article_author {
  first_name: string;
}

export interface ArticleQuery_article {
  title: string;
  content: string;
  author: ArticleQuery_article_author;
}

export interface ArticleQuery {
  article: ArticleQuery_article;
}

export interface ArticleQueryVariables {
  articleId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetArticles
// ====================================================

export interface GetArticles_articles {
  title: string;
  preview: string;
  id: string;
}

export interface GetArticles {
  articles: GetArticles_articles[];
}

export interface GetArticlesVariables {
  pagination?: PaginationInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddArticle
// ====================================================

export interface AddArticle_addArticle_author {
  first_name: string;
  last_name: string;
}

export interface AddArticle_addArticle {
  id: string;
  title: string;
  author: AddArticle_addArticle_author;
}

export interface AddArticle {
  addArticle: AddArticle_addArticle;
}

export interface AddArticleVariables {
  authorId: string;
  content: string;
  title: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Authors
// ====================================================

export interface Authors_authors {
  id: string;
  first_name: string;
  last_name: string;
}

export interface Authors {
  authors: Authors_authors[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// null
export interface PaginationInput {
  skip?: number | null;
  take?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================