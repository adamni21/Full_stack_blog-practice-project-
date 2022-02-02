import { Article } from "src/entity/Article";
import { ArgsType, Field, ID } from "type-graphql";


@ArgsType()
export class AddArticleInput implements Partial<Article> {
  @Field()
  title: string

  @Field()
  content: string

  @Field(type => ID)
  author_id: number
}