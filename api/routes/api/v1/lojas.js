const router = require('express').Router();
const LojaValidation = require('../../../controller/validacoes/lojaValidation')
const auth = require('../../auth');
const LojaController = require('../../../controller/LojaController');

const lojaController = new LojaController();

router.get('/', lojaController.index);
router.get('/:id', lojaController.show);

router.post('/', auth.required ,lojaController.store);
router.put('/:id', auth.required, LojaValidation ,lojaController.update);
router.delete('/:id', auth.required, LojaValidation ,lojaController.remove);

 
module.exports = router;