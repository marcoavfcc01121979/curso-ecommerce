const router = require('express').Router();

const CategoriaController = require('../../../controller/CategoriaController');

const auth = require('../../auth');
const Validation = require('express-validation');
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const { CategoriaValidation } = require('../../../controller/validacoes/categoriaValidation')

const categoriaController = new CategoriaController();

router.get('/', categoriaController.index);
router.get('/disponiveis', categoriaController.indexDisponiveis);
router.get('/:id', categoriaController.show);

router.post('/', auth.required, LojaValidation.admin, categoriaController.store);
router.put('/:id', auth.required, LojaValidation.admin, categoriaController.update);
router.delete('/:id', auth.required, LojaValidation.admin, categoriaController.remove);


module.exports = router;