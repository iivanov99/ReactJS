const models = require('../models');

module.exports = {
  get: {
    all: async (req, res, next) => {
      const orders = await models.Order
        .find({})
        .populate('creator', 'username');
      res.json(orders);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const order = await models.Order
          .findOne({ _id: id })
          .populate('creator', 'username');
        res.json(order);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    try {
      const { user } = req;
      const { name, price } = req.body;
      const createdOrder = await models.Order.create({ name, price, status: 'Pending', creator: user._id });
      await models.User.updateOne({ _id: user._id }, { $push: { orders: createdOrder._id } });
      res.json(createdOrder);
    } catch (err) {
      next(err);
    }
  },
  put: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, price } = req.body;
      const updatedOrder = await models.Order.updateOne({ _id: id }, { name, price });
      res.json(updatedOrder);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteInfo = await models.Order.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};