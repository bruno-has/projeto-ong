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

async function adicionarProjeto(nome, descricao, valor) {
  const [linhas] = await conexao.query(
    'INSERT INTO projetos VALUES (default, ?, ?, ?, default)', 
    [nome, descricao, valor]
  );

  return linhas;
}

module.exports = {
  listarProjetos,
  buscarProjetoPorId,
  adicionarProjeto,
}