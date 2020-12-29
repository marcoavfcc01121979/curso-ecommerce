const router = require('express').Router();

const PagamentoController = require('../../../controller/PagamentoController');

const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const auth = require('../../auth');

const pagamentoController = new PagamentoController();

// TESTE
if(process.env.NODE_ENV !== "production") {
  router.get("/tokens", (req, res) => res.render("pagseguro/index"));
}

// PAGSEGURO
router.post("/notificacao", pagamentoController.verNotificacao);
router.get("/session", pagamentoController.getSessionId);

// CLIENTE
router.get('/:id', auth.required, pagamentoController.show);
router.post('/pagar/:id', auth.required, pagamentoController.pagar);

// ADMIN
router.put('/:id', auth.required, LojaValidation.admin, pagamentoController.update);

module.exports = router;