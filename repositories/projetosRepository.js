const conexao = require('../data/conexao');

async function listarProjetos() {
  const [linhas] = await conexao.query(
    'SELECT * FROM projetos'
  );

  return linhas;
}

module.exports = {
  listarProjetos,
}