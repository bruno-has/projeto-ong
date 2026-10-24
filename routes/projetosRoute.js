const express = require('express');
const router = express.Router();

const middleware = require('../middlewares/validacoes');
const projetosController = require('../controllers/projetosController');

router.get('/', projetosController.listarProjetos);

router.get('/:id', 
  middleware.validarId,
  projetosController.buscarProjeto
);

router.post('/', 
  middleware.validarNome,
  middleware.validarDescricao,
  middleware.validarValor,
  projetosController.adicionarProjeto
);

module.exports = router;