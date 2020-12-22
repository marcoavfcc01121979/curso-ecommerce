const router = require("express").Router();

const PedidoController = require('../../../controller/PedidoController');
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const auth = require('../../auth');

const pedidoController = new PedidoController();

// ADMIN

router.get("/admin", auth.required, LojaValidation.admin, pedidoController.indexAdmin);
router.get("/admin/:id", auth.required, LojaValidation.admin, pedidoController.showAdmin);

router.delete("/admin/:id", auth.required, LojaValidation.admin, pedidoController.removeAdmin);

// -- CARRINHO
router.get("/admin/:id/carrinho", auth.required, LojaValidation.admin, pedidoController.showCarrinhoPedidosAdmin)

// -- ENTREGA

// -- PAGAMENTO


// -- CLIENTE
router.get("/", auth.required,  pedidoController.index);
router.get("/:id", auth.required,  pedidoController.show);

router.post("/", auth.required,  pedidoController.store);
router.delete("/:id", auth.required,  pedidoController.remove);

// -- CARRINHO
router.get("/:id/carrinho", auth.required,  pedidoController.showCarrinhoPedido);

// -- ENTREGA

// -- PAGAMENTO

module.exports = router;
