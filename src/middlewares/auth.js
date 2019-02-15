const jwt = require('jsonwebtoken');

const authMiddleware = (resolve, root, args, context, info) => {
    const { request } = context;
    if (!request.user) {
        const header = request.get('Authorization');
        const token = header && header.replace('Bearer ', '');
        if (token) {
            try {
                const user = jwt.verify(token, 'my secret!');
                request.user = user;
            } catch (err) {
                console.log('Token is missing');
            }
        }
    }
    return resolve(root, args, context, info);
};

module.exports = {
    authMiddleware,
};
