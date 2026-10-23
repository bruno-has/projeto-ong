const conexao = require('../data/conexao');

async function listarProjetos() {
  const [linhas] = await conexao.query(
    'SELECT * FROM projetos'
  );

  return linhas;
}

async function buscarProjetoPorId(id) {
  const [linhas] = await conexao.query(
    'SELECT * FROM projetos WHERE id = ?', [id]
  );

  return linhas[0];
}

module.exports = {
  listarProjetos,
  buscarProjetoPorId,
}