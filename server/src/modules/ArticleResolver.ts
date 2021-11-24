import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Article } from "../entity/Article";

@Resolver()
export class ArticleResolver {

  @Query(() => String)
  async helloWorld() {
    return "Hello World!";
  }
  
  @Query(returns => [Article])
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