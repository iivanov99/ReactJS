const config = require('../config/config');
const models = require('../models');
const utils = require('../utils');

module.exports = {
  get: {
    all: async (req, res) => {
      const users = await models.User.find({});
      res.json(users);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const user = await models.User
          .findOne({ _id: id })
          .populate('orders')
          .populate('cartItems');
        res.json(user);
      } catch (err) {
        next(err);
      }
    }
  },
  post: {
    register: async (req, res, next) => {
      try {
        const { username, email, password, rePassword } = req.body;

        if (password !== rePassword) {
          res.status(406).send({ msg: 'Both passwords must match!' });
          return;
        }

        const createdUser = await models.User.create({ username, email, password });
        res.json(createdUser);
      } catch (err) {
        next(err);
      }
    },
    login: async (req, res, next) => {
      try {
        const { username, password } = req.body;

        const user = await models.User.findOne({ username });

        if (!user) {
          res.status(401).send({ msg: 'Invalid username!' });
          return;
        }

        if (!await user.matchPassword(password)) {
          res.status(401).send({ msg: 'Invalid password!' });
          return;
        }

        const accessToken = await utils.jwt.createToken({ id: user._id });
        res.cookie(config.authCookieName, accessToken).send({ authToken: accessToken });
      } catch (err) {
        next(err);
      }
    },
    logout: async (req, res, next) => {
      res.clearCookie(config.authCookieName).send({ msg: 'Logged out successfully!' });
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { username, password } = req.body;
      const updatedUser = await models.User.updateOne({ _id: id }, { username, password });
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletionInfo = await models.User.deleteOne({ _id: id });
      res.json(deletionInfo);
    } catch (err) {
      next(err);
    }
  }
};