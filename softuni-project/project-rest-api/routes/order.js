const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', auth.forbidGuests, controllers.order.get.all);

router.get('/:id', auth.forbidGuests, controllers.order.get.one);

router.post('/', auth.forbidGuests, controllers.order.post);

router.put('/:id', auth.permitAdminOnly, controllers.order.put);

router.delete('/:id', auth.permitAdminOnly, controllers.order.delete);

module.exports = router;