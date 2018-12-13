const express = require('express'),
    router = express.Router(),
    tecCtrl = require('../controlles/tecnico.controller');

router.get('/', tecCtrl.getTecnicos);
router.post('/', tecCtrl.createTecnicos);
router.get('/:_id', tecCtrl.getTecnico);
router.put('/:_id', tecCtrl.editTecnico);
router.delete('/:_id', tecCtrl.deleteTecnico);
module.exports = router;