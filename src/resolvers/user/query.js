const { roleAccess } = require('../auth/decorators');
const { ROLES } = require('../auth/constants');

const userQueryResolver = {
    users: roleAccess((parent, args, context) => context.prisma.users(), [ROLES.ADMIN]),
    user: roleAccess((parent, args, context) => {
        const { id } = args;
        return context.prisma.user({ id });
    }, [ROLES.CLIENT, ROLES.WORKER, ROLES.ADMIN]),
};

module.exports = {
    userQueryResolver,
};
