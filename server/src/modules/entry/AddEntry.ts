import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { Entry } from "../../entity/Entry";

@Resolver()
export class AddEntryResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello World!";
  }

  @Mutation(() => Entry)
  async addEntry(
    @Arg("title") title: string,
    @Arg("content") content: string,
    @Arg("author_name") author_name: string
  ): Promise<Entry> {

    const entry = await Entry.create({
      title,
      content,
      author_name,
    }).save();

    return entry;
  }
}