import { UserInputError } from "apollo-server-errors";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";
import {} from "graphql"

import { Author } from "../entity/Author";
import { AddAuthorInput, UpdateAuthorInput } from "./types/author-inputs";


@Resolver(Author)
export class AuthorResolver {
  @Query((type) => [Author])
  async authors(): Promise<Author[]> {
    return await Author.find({ relations: ["articles"] });
  }

  @Query((type) => Author)
  async author(@Arg("id", (type) => ID) id: number): Promise<Author | Error> {
    const author = await Author.findOne(id, { relations: ["articles"] });

    if (author) return author;
    else
      return new UserInputError(`Author with id: "${id}" does not exist`);
  }

  @Mutation((type) => Author)
  async addAuthor(
    @Args() { first_name, last_name, date_of_birth }: AddAuthorInput
  ): Promise<Author> {
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

  @Mutation((type) => String)
  async deleteAuthor(
    @Arg("id", (type) => ID) id: number
  ): Promise <string | UserInputError | void> {
    const exists = await Author.findOne(id);
    if (!exists)
      return new UserInputError(`Author with id: ${id} does'nt exist`);
    await Author.delete(id);
    if (!(await Author.findOne(id)))
      return `Author with id: ${id} successfully deleted`;
  }
}
