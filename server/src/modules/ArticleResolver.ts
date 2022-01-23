import { ApolloError } from "apollo-server-errors";
import {
  Arg,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";

import { Article } from "../entity/Article";
import { Author } from "../entity/Author";

@Resolver((type) => Article)
export class ArticleResolver {
  @Query((type) => Article)
  async article(@Arg("articleId") articleId: number): Promise<Article | Error> {
    const article = await Article.findOne(articleId, { relations: ["author"] });

    if (article) return article;
    else
      return new ApolloError(
        `Article with id: "${articleId}" does not exist`,
        "404"
      );
  }

  @Query((type) => [Article])
  async articles(): Promise<Article[]> {
    return await Article.find({ relations: ["author"] });
  }

  @Mutation(() => Article)
  async addArticle(
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("author_id") author_id: number
  ): Promise<Article> {
    const author = await Author.findOne({ id: author_id });
    const article = await Article.create({
      title,
      content,
      author,
    }).save();

    return article;
  }
}
