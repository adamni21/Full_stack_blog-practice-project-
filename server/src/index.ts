import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";

import { AddEntryResolver } from "./modules/entry/AddEntry";





const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [AddEntryResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => console.log("server is ready on http://localhost:4000/graphql"))
};


main();