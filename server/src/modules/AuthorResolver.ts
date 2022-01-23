import { ApolloError } from "apollo-server-errors";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Author } from "../entity/Author";

@Resolver(Author)
export class AuthorResolver {
  @Query((type) => [Author])
  async authors(): Promise<Author[]> {
    return await Author.find({ relations: ["articles"] });
  }

  @Query((type) => Author)
  async author(@Arg("authorId") authorId: number): Promise<Author | Error> {
    const author = await Author.findOne(authorId, { relations: ["articles"] });

    if (author) return author;
    else
      return new ApolloError(
        `Author with id: "${authorId}" does not exist`,
        "404"
      );
  }

  @Mutation((type) => Author)
  async addAuthor(
    @Arg("first_name") first_name: string,
    @Arg("last_name") last_name: string,
    @Arg("date_of_birth") date_of_birth: Date,
  ): Promise<Author> {
    const author = await Author.create({
      first_name,
      last_name,
      date_of_birth
    }).save();

    return author;
  }
}
