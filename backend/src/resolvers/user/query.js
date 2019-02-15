const { roleAccess } = require('../auth/decorators');
const { ROLES } = require('../auth/constants');

const userQueryResolver = {
    users: roleAccess((parent, args, context) => context.prisma.users(), [ROLES.ADMIN]),
    user: roleAccess((parent, args, context) => {
        const { id } = args;
        return context.prisma.user({ id });
    }, [ROLES.ADMIN]),
    currentUser: roleAccess((parent, args, context) => {
        const { request: { user }, prisma } = context;
        return prisma.user({ id: user.id });
    }, [ROLES.ADMIN, ROLES.CLIENT, ROLES.WORKER]),
};

module.exports = {
    userQueryResolver,
};
