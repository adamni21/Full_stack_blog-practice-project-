import { Article } from "../../entity/Article";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class DeleteArticleResponse {
  @Field(type => Article)
  deletedArticle: Article

  @Field()
  deleted: boolean
}