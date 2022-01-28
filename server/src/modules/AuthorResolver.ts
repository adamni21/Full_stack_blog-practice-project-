import { ApolloError } from "apollo-server-errors";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";

import { Author } from "../entity/Author";
import { AddAuthorInput } from "./types/author-inputs";

@Resolver(Author)
export class AuthorResolver {
  @Query((type) => [Author])
  async authors(): Promise<Author[]> {
    return await Author.find({ relations: ["articles"] });
  }

  @Query((type) => Author)
  async author(@Arg("author_id", type => ID)id: number): Promise<Author | Error> {
    const author = await Author.findOne(id, { relations: ["articles"] });

    if (author) return author;
    else
      return new ApolloError(
        `Author with id: "${id}" does not exist`,
        "404"
      );
  }

  @Mutation((type) => Author)
  async addAuthor(
    @Args() {first_name, last_name, date_of_birth}: AddAuthorInput
  ): Promise<Author> {
    const author = await Author.create({
      first_name,
      last_name,
      date_of_birth: date_of_birth.toISOString().split('T')[0]
    }).save();

    return author;
  }

  
}
