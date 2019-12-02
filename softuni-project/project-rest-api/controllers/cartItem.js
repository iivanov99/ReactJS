const models = require('../models');

module.exports = {
  get: {
    all: async (req, res, next) => {
      const { _id: userId } = req.user;
      const cartItems = await models.CartItem
        .find({ creatorId: userId })
      res.json(cartItems);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const cartItem = await models.CartItem
          .findOne({ _id: id })
        res.json(cartItem);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    try {
      const { user } = req;
      const { name, price } = req.body;
      const createdCartItem = await models.CartItem.create({ name, price, creatorId: user._id });
      await models.User.updateOne({ _id: user._id }, { $push: { cartItems: createdCartItem._id } });
      res.json(createdCartItem);
    } catch (err) {
      next(err);
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.paramsls
      const { name, price } = req.body;
      const updatedCartItem = await models.CartItem.updateOne({ _id: id }, { name, price });
      res.json(updatedCartItem);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.paramsls
      const deleteInfo = await models.CartItem.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};