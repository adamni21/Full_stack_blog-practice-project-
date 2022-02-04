import { UserInputError } from "apollo-server-errors";
import { Arg, Args, ID, Mutation, Query, Resolver } from "type-graphql";
import {} from "graphql"

import { Author } from "../entity/Author";
import { AddAuthorInput, UpdateAuthorInput } from "./types/author-inputs";
import { DeleteAuthorResponse } from "./types/response-types";


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
    await Author.update(id, { ...attributesToUpdate });

    const updatedAuthor = await Author.findOne(id);
    
    if (!updatedAuthor)
      return new UserInputError(`Author with id: ${id} does'nt exist`);

    return updatedAuthor;
  }

  @Mutation((type) => DeleteAuthorResponse)
  async deleteAuthor(
    @Arg("id", (type) => ID) id: number
  ): Promise <DeleteAuthorResponse | UserInputError> {
    const author = await Author.findOne(id);
    if (!author)
      return new UserInputError(`Author with id: ${id} does'nt exist`);
    const result = await (await Author.delete(id)).affected === 1;
    
    return {deletedItem: author, isDeleted: result}
  }
}
