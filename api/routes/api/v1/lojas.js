const router = require('express').Router();
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation')
const auth = require('../../auth');
const LojaController = require('../../../controller/LojaController');

const Validation = require('express-validation');

const lojaController = new LojaController();

router.get('/', lojaController.index); // testado
router.get('/:id', Validation(LojaValidation.show) ,lojaController.show); // testado

router.post('/', auth.required, Validation(LojaValidation.store) ,lojaController.store); // testado
router.put('/:id', auth.required, LojaValidation.admin, Validation(LojaValidation.update) ,lojaController.update);
router.delete('/:id', auth.required, LojaValidation.admin ,lojaController.remove);

 
module.exports = router;