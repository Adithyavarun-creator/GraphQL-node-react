const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(() => {
  console.log("Server running on 4000 🚀🚀🚀");
});
