import { ApolloError, UserInputError } from "apollo-server-errors";
import { DateUtils } from "typeorm/util/DateUtils";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";

import { Author } from "../entity/Author";
import { AddAuthorInput, UpdateAuthorInput } from "./types/author-inputs";

@Resolver(Author)
export class AuthorResolver {
  @Query((type) => [Author])
  async authors(): Promise<Author[]> {
    return await Author.find({ relations: ["articles"] });
  }

  @Query((type) => Author)
  async author(
    @Arg("author_id", (type) => ID) id: number
  ): Promise<Author | Error> {
    const author = await Author.findOne(id, { relations: ["articles"] });

    if (author) return author;
    else
      return new ApolloError(`Author with id: "${id}" does not exist`, "404");
  }

  @Mutation((type) => Author)
  async addAuthor(
    @Args() { first_name, last_name, date_of_birth }: AddAuthorInput
  ): Promise<Author> {
    date_of_birth = DateUtils.mixedDateToDateString(new Date(date_of_birth));
    const author = await Author.create({
      first_name,
      last_name,
      date_of_birth,
    }).save();
    return author;
  }

  @Mutation((type) => Author)
  async updateAuthor(
    @Args() { id, attributesToUpdate }: UpdateAuthorInput
  ): Promise<Author | UserInputError> {
    (
      Object.keys(attributesToUpdate) as Array<keyof typeof attributesToUpdate>
    ).map((key) => {
      if (attributesToUpdate[key] === undefined) delete attributesToUpdate[key];
    });

    await Author.update(id, { ...attributesToUpdate });
    const updatedAuthor = await Author.findOne(id);
    if (!updatedAuthor)
      return new UserInputError(`Author with id: ${id} does'nt exist`);

    return updatedAuthor;
  }
}
