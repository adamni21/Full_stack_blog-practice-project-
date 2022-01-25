import { ApolloError } from "apollo-server-errors";
import { Arg, ID, Mutation, Query, Resolver } from "type-graphql";

import { Article } from "../entity/Article";
import { Author } from "../entity/Author";
import PaginationInput from "./types/pagination-input";

@Resolver((type) => Article)
export class ArticleResolver {
  @Query((type) => Article)
  async article(
    @Arg("article_id", (type) => ID) id: number
  ): Promise<Article | Error> {
    const article = await Article.findOne(id, {
      relations: ["author"],
    });

    if (article) return article;
    else
      return new ApolloError(`Article with id: "${id}" does not exist`, "404");
  }

  @Query((type) => [Article])
  async articles(
    @Arg("pagination", { nullable: true }) pagination: PaginationInput
  ): Promise<Article[]> {
    const { take, skip } = pagination || {}
    if (!take)
      return await Article.find({
        relations: ["author"],
        skip: skip || 0,
      });

    return await Article.find({
      relations: ["author"],
      skip: skip,
      take: take,
    });
  }

  @Mutation((type) => Article)
  async addArticle(
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("author_id", (type) => ID) author_id: number
  ): Promise<Article> {
    const author = await Author.findOne({
      id: author_id,
    });
    const article = await Article.create({
      title,
      content,
      author,
    }).save();

    return article;
  }
}
