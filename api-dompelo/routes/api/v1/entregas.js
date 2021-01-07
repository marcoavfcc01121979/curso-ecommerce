const router = require('express').Router();

const EntregaController = require('../../../controller/EntregaController');

const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const Validation  = require('express-validation');
const { EntregaValidation } = require('../../../controller/validacoes/entregaValidation');
const auth = require('../../auth');

const entregaController = new EntregaController(); 

// ADMIN
router.put('/:id', auth.required, LojaValidation.admin,Validation(EntregaValidation.update) , entregaController.update);

// CLIENTE
router.get('/:id', auth.required, Validation(EntregaValidation.show) ,entregaController.show);
router.post('/calcular', Validation(EntregaValidation.calcular) ,entregaController.calcular);

module.exports = router;

