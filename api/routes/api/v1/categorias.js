const router = require('express').Router();

const CategoriaController = require('../../../controller/CategoriaController');

const auth = require('../../auth');
const Validation = require('express-validation');
const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const { CategoriaValidation } = require('../../../controller/validacoes/categoriaValidation')

const categoriaController = new CategoriaController();

router.get('/', Validation(CategoriaValidation.index), categoriaController.index);
router.get('/disponiveis',Validation(CategoriaValidation.indexDisponiveis), categoriaController.indexDisponiveis);
router.get('/:id',Validation(CategoriaValidation.show), categoriaController.show);

router.post('/', auth.required, LojaValidation.admin,Validation(CategoriaValidation.store), categoriaController.store);
router.put('/:id', auth.required, LojaValidation.admin,Validation(CategoriaValidation.update), categoriaController.update);
router.delete('/:id', auth.required, LojaValidation.admin, Validation(CategoriaValidation.remove), categoriaController.remove);


module.exports = router;