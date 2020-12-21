const router = require('express').Router();

const ProdutoController = require('../../../controller/ProdutoController');

const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const Validation = require('express-validation');
const { ProdutoValidation } = require('../../../controller/validacoes/produtoValidation')
const auth = require("../../auth");
const upload = require('../../../config/multer');

const produtoController = new ProdutoController();

// ADMIN
router.post('/', auth.required, LojaValidation.admin,Validation(ProdutoValidation.store) ,produtoController.store);
router.put('/:id', auth.required, LojaValidation.admin,Validation(ProdutoValidation.update) , produtoController.update);
router.put('/images/:id', auth.required, LojaValidation.admin, upload.array('files', 4),Validation(ProdutoValidation.updateImages) , produtoController.updateImages);
router.delete('/:id', auth.required, LojaValidation.admin,Validation(ProdutoValidation.remove) , produtoController.remove);

// CLIENTE/VISITANTES
router.get('/', Validation(ProdutoValidation.index) ,produtoController.index);
router.get('/disponiveis',Validation(ProdutoValidation.indexDisponiveis) , produtoController.indexDisponiveis);
router.get('/search/:search',Validation(ProdutoValidation.search) , produtoController.search);
router.get('/:id',Validation(ProdutoValidation.show) , produtoController.show);

// VARIACOES
router.get('/:id/variacoes',Validation(ProdutoValidation.showVariacoes) , produtoController.showVariacoes);

// AVALIACOES
router.get('/:id/avaliacoes',Validation(ProdutoValidation.showAvaliacoes) , produtoController.showAvaliacoes);

module.exports = router;