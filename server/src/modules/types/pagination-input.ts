import { Field, InputType, Int } from "type-graphql";

@InputType()
export default class PaginationInput {
  @Field((type) => Int, { defaultValue: 0, nullable: true })
  skip: number;

  @Field(type => Int, {nullable: true})
	take: number;

}
