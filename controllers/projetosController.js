const projetosService = require('../services/projetosService')

async function listarProjetos(req, res, next) {
  try {
    const projetos = await projetosService.listarProjetos();
    return res.status(200).json(projetos);
  
  } catch (erro) {
    next(erro);
  }
}

async function buscarProjeto(req, res, next) {
  try {
    const id = Number(req.params.id)

    const projeto = await projetosService.buscarProjeto(id);    
    return res.status(200).json(projeto);

  } catch (erro) {
    next(erro);
  }
}

module.exports = {
  listarProjetos,
  buscarProjeto,
}