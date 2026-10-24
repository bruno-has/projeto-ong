const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const projetosRepository = require('../repositories/projetosRepository');

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

module.exports = {
  listarProjetos,
  buscarProjeto,
  adicionarProjeto,
}