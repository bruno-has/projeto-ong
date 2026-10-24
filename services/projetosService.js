const pool = require('../data/conexao');
const projetosRepository = require('../repositories/projetosRepository');
const NotFoundError = require('../errors/NotFoundError');

async function listarProjetos() {
  const projetos = await projetosRepository.listarProjetos();

  if (projetos.length === 0) {
    throw new NotFoundError("Projetos não encontrados")
  };

  return projetos;
}

async function buscarProjeto(id) {
  const projeto = await projetosRepository.buscarProjetoPorId(id);

  if (!projeto) {
    throw new NotFoundError("Projeto não encontrado")
  }

  return projeto;
}

async function adicionarProjeto(nome, descricao, valor) {
  const addProjeto = await projetosRepository.adicionarProjeto(nome, descricao, valor);
  return {
    mensagem: 'Projeto adicionado com sucesso',
    projeto: {
      id: addProjeto.insertId,
      nome: nome,
      descricao: descricao,
      valor: valor
    }
  };
}

async function removerProjeto(id) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const projeto = await projetosRepository.buscarProjetoPorId(id, connection);
    if (!projeto) {
      throw new NotFoundError("Projeto não encontrado")
    }

    await projetosRepository.removerProjeto(id, connection);

    await connection.commit();

    return {
      mensagem: "Projeto removido com sucesso"
    }

  } catch (erro) {
    await connection.rollback();
    throw erro;
  } finally {
    await connection.release();
  }
}

module.exports = {
  listarProjetos,
  buscarProjeto,
  adicionarProjeto,
  removerProjeto,
}