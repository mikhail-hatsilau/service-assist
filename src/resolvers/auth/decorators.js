const roleAccess = (resolver, roles) => (parent, args, context, info) => {
    const { request: { user } } = context;
    console.log(user);
    if (user && roles.indexOf(user.role) > -1) {
        return resolver(parent, args, context, info);
    }

    throw new Error('Unauthoriized');
};

module.exports = {
    roleAccess,
};
