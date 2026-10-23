const conexao = require('../data/conexao')
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [linhas] = await conexao.query(
      "SELECT * FROM projetos"
    );
    console.log(linhas)
    
    res.status(200).json(linhas);
  } catch (erro) {
    console.error('Erro:', erro)
    res.status(500).json(erro)
  }
})

module.exports = router;