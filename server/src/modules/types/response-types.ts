import { Article } from "../../entity/Article";
import { Author } from "../../entity/Author";
import { ClassType, Field, ObjectType } from "type-graphql";

function DeleteResponse<TItem>(TItemClass: ClassType<TItem>) {
  @ObjectType({ isAbstract: true })
  abstract class DeleteResponseClass {
    @Field((type) => TItemClass)
    deletedItem: TItem;

    @Field()
    isDeleted: boolean;
  }
  return DeleteResponseClass;
}

@ObjectType()
export class DeleteArticleResponse extends DeleteResponse(Article) {}

@ObjectType()
export class DeleteAuthorResponse extends DeleteResponse(Author) {}
