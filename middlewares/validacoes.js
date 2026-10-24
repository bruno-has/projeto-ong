const ValidationError = require('../errors/ValidationError');

function validarId(req, res, next) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return next(new ValidationError('ID inválido'));
  }

  req.id = id;

  next();
}

function validarNome(req, res, next) {
  const { nome } = req.body;

  if (typeof nome !== 'string' || nome.trim() === "" ) {
    return next(new ValidationError('Nome inválido'))
  }

  if (nome.trim().length > 100) {
    return next(new ValidationError('Máximo de 100 caracteres para o nome'))
  }

  req.nome = nome;

  next();
}

function validarDescricao(req, res, next) {
  const { descricao } = req.body;

  if (descricao === undefined) {
    return next()
  }

  req.descricao = descricao;

  next();
}

function validarValor(req, res, next) {
  const { valor } = req.body;

  if (Number.isNaN(Number(valor))) {
    return next(new ValidationError('Valor inválido'))
  }

  if (Number(valor) < 0) {
    return next(new ValidationError('Valor precisa ser maior que zero'))
  }

  req.valor = Number(valor);

  next();
}

module.exports = {
  validarId,
  validarNome,
  validarDescricao,
  validarValor,
}