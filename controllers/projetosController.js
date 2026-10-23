const projetosService = require('../services/projetosService')

async function listarProjetos(req, res, next) {
  try {
    const projetos = await projetosService.listarProjetos();

    return res.status(200).json(projetos);
  } catch (erro) {
    console.error(erro)
    return res.status(500).json(erro);
  }
}

module.exports = {
  listarProjetos,
}