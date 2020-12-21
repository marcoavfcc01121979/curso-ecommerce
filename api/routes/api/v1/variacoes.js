const router = require('express').Router();

const VariacaoController = require("../../../controller/VariacaoController.js");

const { LojaValidation } = require('../../../controller/validacoes/lojaValidation');
const auth = require('../../auth');
const upload = require('../../../config/multer');

const { variacaoValidation } = require('../../../controller/validacoes/variacaoValidation');
const Validation = require('express-validation');

const variacaoController = new VariacaoController();

router.get('/',Validation(variacaoValidation.index) ,variacaoController.index);
router.get('/:id',Validation(variacaoValidation.show) , variacaoController.show);

router.post("/", auth.required, LojaValidation.admin, Validation(variacaoValidation.store) ,variacaoController.store);
router.put('/:id', auth.required, LojaValidation.admin,Validation(variacaoValidation.update) , variacaoController.update);
router.put('/images/:id', auth.required, LojaValidation.admin,upload.array("files", 4) ,Validation(variacaoValidation.uploadImages) ,variacaoController.uploadImages);
router.delete('/:id', auth.required, LojaValidation.admin, Validation(variacaoValidation.remove) ,variacaoController.remove);

module.exports = router;
