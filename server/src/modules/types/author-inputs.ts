import { Author } from "src/entity/Author";
import { Field, ID, InputType } from "type-graphql";

@InputType({ description: "New recipe data" })
export class AddAuthorInput implements Partial<Author>{
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field(type => Date,{description: 'date in format: "YYYY-MM-DD'})
  date_of_birth: Date
}