const router = require('express').Router();
const ctrl   = require('../controllers/vehicleController');

router.get('/',    ctrl.listVehicles);
router.get('/:id', ctrl.getVehicle);
router.post('/',   ctrl.createVehicle);
router.put('/:id', ctrl.updateVehicle);
router.delete('/:id', ctrl.deleteVehicle);

module.exports = router;