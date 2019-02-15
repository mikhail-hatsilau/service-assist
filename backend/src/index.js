const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { Query, Mutation } = require('./resolvers');
const { authMiddleware } = require('./middlewares/auth');

const resolvers = {
    Query,
    Mutation,
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        prisma,
        ...request,
    }),
    middlewares: [authMiddleware],
});

server.start(() => console.log('Server is listening on 4000 port'));
