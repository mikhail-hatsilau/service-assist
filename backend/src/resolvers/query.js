const { userQueryResolver } = require('./user');

const query = {
    ...userQueryResolver,
};

module.exports = {
    Query: query,
};
