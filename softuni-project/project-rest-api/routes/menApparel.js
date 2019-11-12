const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', controllers.menApparel.get.all);

router.get('/:id', controllers.menApparel.get.one);

router.post('/', auth.permitAdminOnly, controllers.menApparel.post);

router.put('/:id', auth.permitAdminOnly, controllers.menApparel.put.editApparel);

router.delete('/:id', auth.permitAdminOnly, controllers.menApparel.delete);

module.exports = router;