const router = require("express").Router();

const PedidoController = require('../../../controller/PedidoController');
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const Validation = require('express-validation');
const { PedidoValidation } = require('../../../controller/validacoes/pedidoValidation')
const auth = require('../../auth');

const pedidoController = new PedidoController();

// ADMIN

router.get("/admin", auth.required, LojaValidation.admin,Validation(PedidoValidation.indexAdmin) ,pedidoController.indexAdmin);
router.get("/admin/:id", auth.required, LojaValidation.admin,Validation(PedidoValidation.showAdmin) , pedidoController.showAdmin);

router.delete("/admin/:id", auth.required, LojaValidation.admin,Validation(PedidoValidation.removeAdmin) , pedidoController.removeAdmin);

// -- CARRINHO
router.get("/admin/:id/carrinho", auth.required, LojaValidation.admin,Validation(PedidoValidation.showCarrinhoPedidosAdmin) , pedidoController.showCarrinhoPedidosAdmin)

// -- PAGAMENTO


// -- CLIENTE
router.get("/", auth.required, Validation(PedidoValidation.index) , pedidoController.index);
router.get("/:id", auth.required, Validation(PedidoValidation.show) , pedidoController.show);

router.post("/", auth.required, Validation(PedidoValidation.store) , pedidoController.store);
router.delete("/:id", auth.required, Validation(PedidoValidation.remove) , pedidoController.remove);

// -- CARRINHO
router.get("/:id/carrinho", auth.required, Validation(PedidoValidation.showCarrinhoPedido) , pedidoController.showCarrinhoPedido);

// -- PAGAMENTO

module.exports = router;
