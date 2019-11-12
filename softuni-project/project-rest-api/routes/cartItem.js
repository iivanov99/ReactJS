const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', auth.forbidGuests, controllers.cartItem.get.all);

router.get('/:id', auth.forbidGuests, controllers.cartItem.get.one);

router.post('/', auth.forbidGuests, controllers.cartItem.post);

router.put('/:id', auth.forbidGuests, controllers.cartItem.put);

router.delete('/:id', auth.forbidGuests, controllers.cartItem.delete);

module.exports = router;