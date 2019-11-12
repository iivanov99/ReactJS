const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', controllers.womenApparel.get.all);

router.get('/:id', controllers.womenApparel.get.one);

router.post('/', auth.permitAdminOnly, controllers.womenApparel.post);

router.put('/:id', auth.permitAdminOnly, controllers.womenApparel.put.editApparel);

router.delete('/:id', auth.permitAdminOnly, controllers.womenApparel.delete);

module.exports = router;