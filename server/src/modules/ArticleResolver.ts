import { UserInputError } from "apollo-server-errors";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";

import { Article } from "../entity/Article";
import { Author } from "../entity/Author";
import {
  AddArticleInput,
  ArticleUpdatedAttributes,
  UpdateArticleInput,
} from "./types/article-inputs";
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
    else return new UserInputError(`Article with id: "${id}" does not exist`);
  }

  @Query((type) => [Article])
  async articles(@Args() { skip, take }: PaginationInput): Promise<Article[]> {
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
    @Args() { title, content, author_id }: AddArticleInput
  ): Promise<Article | UserInputError> {
    const author = await Author.findOne({
      id: author_id,
    });
    if (!author)
      return new UserInputError(`Author with id: ${author_id} does'nt exist`);
    const article = await Article.create({
      title,
      content,
      author,
    }).save();

    return article;
  }

  @Mutation((type) => Article)
  async updateArticle(
    @Args()
    { id, updatedAttributes }: UpdateArticleInput
  ): Promise<Article | UserInputError> {
    const article = await Article.findOne(id);
    if (!article)
      return new UserInputError(`Article with id: ${id} does'nt exist`);

    const { authorId } = updatedAttributes;
    if (!(await Author.findOne(authorId))) {
      const errorMessage = `Value of "updatedAttributes.authorID" is invalid. Author with id: ${authorId} does'nt exist`;
      return new UserInputError(errorMessage);
    }

    await Article.update(id, updatedAttributes);
    const updatedArticle = await Article.findOne(id, {
      relations: ["author"],
    });

    return updatedArticle!;
  }
}
