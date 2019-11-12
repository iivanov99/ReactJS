const models = require('../models');

module.exports = {
  get: {
    all: async (req, res) => {
      const menApparel = await models.MenApparel.find({});
      res.json(menApparel);
    },
    one: async (req, res, next) => {
      try {
        const { id } = req.params;
        const menApparel = await models.MenApparel.find({ _id: id });
        res.json(menApparel);
      } catch (err) {
        next(err);
      }
    }
  },
  post: async (req, res, next) => {
    try {
      const { name, category, price, description, size, imageUrl } = req.body;
      const createdMenApparel = await models.MenApparel
        .create({ name, category, price, description, size, imageUrl });
      res.json(createdMenApparel);
    } catch (err) {
      next(err);
    }
  },
  put: {
    editApparel: async (req, res, next) => {
      try {
        const { id } = req.params;
        const { name, category, price, description, size, imageUrl } = req.body;
        const updatedMenApparel = await models.MenApparel
          .updateOne({ _id: id }, { name, category, price, description, size, imageUrl });
        res.json(updatedMenApparel);
      } catch (err) {
        next(err);
      }
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteInfo = await models.MenApparel.deleteOne({ _id: id });
      res.json(deleteInfo);
    } catch (err) {
      next(err);
    }
  }
};