import aserver from "apollo-server";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js";

import cloudinary from "cloudinary";

const { ApolloServer } = aserver;

const startServer = async () => {
  await mongoose.connect("mongodb+srv://xxxxxxxxxxx.mongodb.net/dbLab5?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.set('useFindAndModify', false);

  cloudinary.config({
    cloud_name: "xxxx",
    api_key: "xxxxx",
    api_secret: "xxxx",
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
  });
};

startServer();