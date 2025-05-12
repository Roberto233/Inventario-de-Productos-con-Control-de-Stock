const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/producto.controller');

router.post('/', ctrl.crear);
router.get('/', ctrl.listar);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);
router.post('/:id/movimiento', ctrl.movimiento);

module.exports = router;
