const pool = require('../data/conexao');

async function listarProjetos(connection=pool) {
  const [linhas] = await connection.query(
    'SELECT * FROM projetos'
  );

  return linhas;
}

async function buscarProjetoPorId(id, connection=pool) {
  const [linhas] = await connection.query(
    'SELECT * FROM projetos WHERE id = ?', [id]
  );

  return linhas[0];
}

async function adicionarProjeto(nome, descricao, valor, connection=pool) {
  const [linhas] = await connection.query(
    'INSERT INTO projetos VALUES (default, ?, ?, ?, default)', 
    [nome, descricao, valor]
  );

  return linhas;
}

async function removerProjeto(id, connection=pool) {
  const [linhas] = await connection.query(
    'DELETE FROM projetos WHERE id = ?', [id]
  );

  return linhas;
}

module.exports = {
  listarProjetos,
  buscarProjetoPorId,
  adicionarProjeto,
  removerProjeto,
}