const {
    NODE_ENV,
    SECRET_KEY,
} = process.env;

module.exports = {
    ENV: NODE_ENV,
    SECRET_KEY,
};
