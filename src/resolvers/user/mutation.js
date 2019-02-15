const userMutationResolver = {
    createUser(parent, args, context) {
        return context.prisma.createUser(args);
    },
    updateUser(parent, args, context) {
        const { id, ...data } = args;
        return context.prisma.updateUser({
            where: { id },
            data,
        });
    },
};

module.exports = {
    userMutationResolver,
};
