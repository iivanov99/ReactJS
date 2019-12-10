const config = require('../config/config');
const router = require('../routes/');
const uitls = require('../utils');
const models = require('../models');

module.exports = (app) => {

    app.get('/auth', async (req, res, next) => {
        try {
            const authToken = req.cookies[config.authCookieName];
            const { id } = await uitls.jwt.verifyToken(authToken);
            const user = await models.User.findOne({ _id: id });
            res.json(user);
        } catch (err) {
            res.status(401).send({ msg: 'Unauthorized!' });
        }
    })

    app.use('/api/user', router.user);

    app.use('/api/origami', router.origami);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};