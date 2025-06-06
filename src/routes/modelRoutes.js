const router = require('express').Router();
const ctrl = require('../controllers/modelController');

router.get('/', ctrl.listModels);
router.get('/:id', ctrl.getModel);
router.post('/', ctrl.createModel);
router.put('/:id', ctrl.updateModel);
router.delete('/:id', ctrl.deleteModel);

module.exports = router;
