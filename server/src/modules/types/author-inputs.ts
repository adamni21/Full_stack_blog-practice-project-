import { Author } from "src/entity/Author";
import { ArgsType, Field, ID, InputType } from "type-graphql";


@ArgsType()
export class AddAuthorInput implements Partial<Author> {
  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field({ description: 'date in format: "YYYY-MM-DD' })
  date_of_birth: string;
}


@InputType()
class AttributesToUpdate implements Partial<Author> {
  @Field({ nullable: true })
  first_name: string;

  @Field({ nullable: true })
  last_name: string;

  @Field({
    description: 'date in format: "YYYY-MM-DD',
    nullable: true,
  })
  date_of_birth: string;
}


@ArgsType()
export class UpdateAuthorInput implements Partial<Author> {
  @Field((type) => ID)
  id: number;

  @Field((type) => AttributesToUpdate)
  attributesToUpdate: AttributesToUpdate;
}
