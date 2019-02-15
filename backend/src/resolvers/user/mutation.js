const { roleAccess } = require('../auth/decorators');
const { ROLES } = require('../auth/constants');

const userMutationResolver = {
    createUser: roleAccess(
        (parent, args, context) => context.prisma.createUser(args),
        [ROLES.ADMIN],
    ),
    updateUser: roleAccess((parent, args, context) => {
        const { id, ...data } = args;
        return context.prisma.updateUser({
            where: { id },
            data,
        });
    }, [ROLES.ADMIN]),
};

module.exports = {
    userMutationResolver,
};
