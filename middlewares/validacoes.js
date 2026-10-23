const ValidationError = require('../errors/ValidationError');

function validarId(req, res, next) {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return next(new ValidationError('ID inválido'));
  }

  req.id = id;

  next();
}

module.exports = {
  validarId,
}