import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { PORT } from "./constants";
import { context } from "./context";

const server = new ApolloServer({
  schema,
  context,
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server is up to the moon at ${url}`);
});
