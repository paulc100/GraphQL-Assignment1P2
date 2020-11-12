import aserver from "apollo-server";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

const { ApolloServer } = aserver;

const startServer = async () => {
  await mongoose.connect("mongodb+srv://admin:passwordpassword@cluster0.bqr5n.mongodb.net/local_library?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.set('useFindAndModify', false);

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  });
};

startServer();