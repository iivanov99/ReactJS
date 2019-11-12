const models = require('../models');

module.exports = {
  get: {
    all: async (req, res) => {
      const womenApparel = await models.WomenApparel.find({});
      res.json(womenApparel);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const womenApparel = await models.WomenApparel.find({ _id: id });
        res.json(womenApparel);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    try {
      const { name, category, price, description, size, imageUrl } = req.body;
      const createdWomenApparel = await models.WomenApparel
        .create({ name, category, price, description, size, imageUrl });
      res.json(createdWomenApparel);
    } catch (err) {
      next(err);
    }
  },
  put: {
    editApparel: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { name, category, price, description, size, imageUrl, ordersCount } = req.body;
        const updatedWomenApparel = await models.WomenApparel
          .updateOne({ _id: id }, { name, category, price, description, size, imageUrl, ordersCount });
        res.json(updatedWomenApparel);
      } catch (err) {
        next(err);
      }
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteInfo = await models.WomenApparel.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};