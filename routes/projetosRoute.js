const express = require('express');
const router = express.Router();

const projetosController = require('../controllers/projetosController');

router.get('/', projetosController.listarProjetos);

router.get('/:id', projetosController.buscarProjeto);

module.exports = router;