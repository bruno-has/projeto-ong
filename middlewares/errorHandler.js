const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');

async function errorHandler(err, req, res, next) {
  if (err instanceof NotFoundError) {
    return res.status(err.status).json({
      erro: err.message,
    });
  }

  if (err instanceof ValidationError) {
    return res.status(err.status).json({
      erro: err.message,
    });
  }

  console.error(err);
  return res.status(500).json({
    erro: 'Erro no servidor',
  });
}

module.exports = errorHandler;