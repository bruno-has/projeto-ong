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
    const projeto = await projetosService.buscarProjeto(req.id);    
    return res.status(200).json(projeto);

  } catch (erro) {
    next(erro);
  }
}

async function adicionarProjeto(req, res, next) {
  try {
    const addProjeto = await projetosService.adicionarProjeto(
      req.nome,
      req.descricao,
      req.valor
    );
    return res.status(201).json(addProjeto);

  } catch (erro) {
    next(erro);
  }
}

async function removerProjeto(req, res, next) {
  try { 
    const removerProjeto = await projetosService.removerProjeto(req.id);
    return res.status(200).json(removerProjeto);

  } catch (erro) {
    next(erro);
  }
}

module.exports = {
  listarProjetos,
  buscarProjeto,
  adicionarProjeto,
  removerProjeto,
}