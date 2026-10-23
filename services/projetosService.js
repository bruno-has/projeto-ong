const projetosRepository = require('../repositories/projetosRepository');

async function listarProjetos() {
  const projetos = await projetosRepository.listarProjetos();

  if (projetos.length === 0) {
    return "Nenhum projeto encontrado"
  };

  return projetos;
}

module.exports = {
  listarProjetos,
}