const router = require('express').Router();
const LojaValidation = require('../../../controller/validacoes/lojaValidation')
const auth = require('../../auth');
const LojaController = require('../../../controller/LojaController');

const lojaController = new LojaController();

router.get('/', lojaController.index); // testado
router.get('/:id', lojaController.show); // testado

router.post('/', auth.required ,lojaController.store); // testado
router.put('/:id', auth.required, LojaValidation ,lojaController.update);
router.delete('/:id', auth.required, LojaValidation ,lojaController.remove);

 
module.exports = router;