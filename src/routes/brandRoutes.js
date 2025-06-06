const router = require('express').Router();
const ctrl = require('../controllers/brandController');

router.get('/', ctrl.listBrands);
router.get('/:id', ctrl.getBrand);
router.post('/', ctrl.createBrand);
router.put('/:id', ctrl.updateBrand);
router.delete('/:id', ctrl.deleteBrand);

module.exports = router;
