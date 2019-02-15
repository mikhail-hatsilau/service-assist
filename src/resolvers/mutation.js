const { userMutationResolver } = require('./user');
const { authMutationResolvers } = require('./auth');

const mutation = {
    ...userMutationResolver,
    ...authMutationResolvers,
};

module.exports = {
    Mutation: mutation,
};
