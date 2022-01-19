const db = require('./db/models');

const signInUser = (req, res, user) => {
    req.session.auth = { userId: user.id };
}
const signOutUser = (req, res) => {
    delete req.session.auth;
}
const requireAuth = (req, res, next) => {
    if (!res.locals.authenticated) {
        return res.redirect('/users/signin');
    }
    return next();
}
const restoreUser = async(req, res, next) => {
    console.log(req.session.auth);
    if (req.session.auth) {
        const { userId } = req.session.auth;
        try {
            const user = await db.User.findByPk(userId);
            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        }
        catch (error) {
            res.locals.authenticated = false;
            next(error);
        }
    } else {
        res.locals.authenticated = false;
        next();
    }
}

module.exports = {
    signInUser,
    signOutUser,
    requireAuth,
    restoreUser
}
