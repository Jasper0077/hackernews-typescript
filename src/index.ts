import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { PORT } from "./constants";

const server = new ApolloServer({
  schema
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server is up to the moon at ${url}`);
});