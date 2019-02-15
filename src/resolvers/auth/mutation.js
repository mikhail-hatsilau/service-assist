const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { SECRET_KEY } = require('../../env');

const userFiledsToOmit = ['password'];

const authMutationResolvers = {
    async signUp(parent, args, context) {
        const { email, password } = args;
        const { prisma } = context;
        const user = await prisma.user({ email });
        if (user) {
            throw new Error(`User with ${email} email already exists`);
        }
        const encryptedPassword = await bcrypt.hash(password, 10);
        const createdUser = await prisma.createUser({
            ...args,
            password: encryptedPassword,
        });

        const token = jwt.sign({
            id: createdUser.id,
            email: createdUser.email,
            role: createdUser.role,
        }, SECRET_KEY);

        return {
            token,
            user: _.omit(createdUser, userFiledsToOmit),
        };
    },
    async login(parent, args, context) {
        const { email, password } = args;
        const { prisma } = context;
        const user = await prisma.user({ email });
        if (!user) {
            throw new Error(`User with ${email} email does not exist`);
        }

        const passwordsAreEqual = await bcrypt.compare(password, user.password);

        if (!passwordsAreEqual) {
            throw new Error('Wrong password');
        }

        const token = jwt.sign({
            id: user.id,
            email: user.email,
            role: user.role,
        }, SECRET_KEY);

        return {
            token,
            user: _.omit(user, userFiledsToOmit),
        };
    },
};

module.exports = {
    authMutationResolvers,
};
