import { ArgsType, Field, InputType, Int } from "type-graphql";


@ArgsType()
export default class PaginationInput {
  @Field((type) => Int, { defaultValue: 0, nullable: true })
  skip: number;

  @Field(type => Int, {nullable: true})
	take: number;

}
