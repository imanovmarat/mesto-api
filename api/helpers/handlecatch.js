const BadRequestErr = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');

module.exports = (res, err, next) => {
  console.error('err = ', err.statusCode);
  if (err.statusCode === 404) {
    next(err);
  } else if (err.statusCode === 409) {
    next(err);
  } else if (err.kind === 'ObjectId') {
    next(new BadRequestErr('Неправильный id'));
  } else {
    next(new NotFoundError('Ошибка на сервере'));
  }
};
