import { Article } from "src/entity/Article";
import { ArgsType, Field, ID, InputType } from "type-graphql";

@ArgsType()
export class AddArticleInput implements Partial<Article> {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => ID)
  author_id: number;
}

@InputType()
export class ArticleUpdatedAttributes implements Partial<Article> {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  content?: string;

  @Field((type) => ID, { nullable: true })
  authorId?: number;
}

@ArgsType()
export class UpdateArticleInput implements Partial<Article> {
  @Field((type) => ID)
  id: number;

  @Field()
  updatedAttributes: ArticleUpdatedAttributes;
}
