// src/lambda/graphql.js
import { ApolloServer, gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (parent, args, context) => {
      return 'Hello from graphql!';
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
