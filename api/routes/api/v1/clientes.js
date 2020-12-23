const router = require('express').Router();

const ClienteController = require('../../../controller/ClienteController')
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const { ClienteValidation } = require('../../../controller/validacoes/clienteValidation');

const Validation = require('express-validation');
const auth = require('../../auth');

const clienteController = new ClienteController();

// Admin
router.get('/', auth.required, LojaValidation.admin,Validation(ClienteValidation.index) ,clienteController.index);
router.get('/search/:search/pedidos', auth.required, LojaValidation.admin,Validation(ClienteValidation.searchPedidos) , clienteController.searchPedidos);
router.get('/search/:search', auth.required, LojaValidation.admin,Validation(ClienteValidation.search) , clienteController.search);

router.get('/admin/:id', auth.required, LojaValidation.admin,Validation(ClienteValidation.showAdmin) , clienteController.showAdmin);
router.get('/admin/:id/pedidos', auth.required, LojaValidation.admin,Validation(ClienteValidation.showPedidosCliente) , clienteController.showPedidosCliente);

router.put('/admin/:id', auth.required, LojaValidation.admin,Validation(ClienteValidation.updateAdmin) , clienteController.updateAdmin);


// Cliente
router.get('/:id', auth.required,Validation(ClienteValidation.show) , clienteController.show);

router.post('/',Validation(ClienteValidation.store) , clienteController.store);
router.put('/:id', auth.required, Validation(ClienteValidation.update) , clienteController.update);
router.delete('/:id', auth.required, clienteController.remove);

module.exports = router;