import { ApolloError } from "apollo-server-errors";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Article } from "../entity/Article";

@Resolver()
export class ArticleResolver {

  @Query(() => Article)
  async article(
    @Arg("articleId") articleId: string
  ): Promise<Article | Error> {
    const article = await Article.findOne(articleId)

    if(article) return article;
    else return new ApolloError(`Article with id: "${articleId}" does not exist`, "404")

  }
  
  @Query(() => [Article])
  articles(): Promise<Article[]> {
    return Article.find();
  }

  @Mutation(() => Article)
  async addArticle(
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("author_name") author_name: string
  ): Promise<Article> {

    const article = await Article.create({
      title,
      content,
      author_name,
    }).save();

    return article;
  }
}