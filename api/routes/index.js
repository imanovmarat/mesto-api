const router = require('express').Router();
const users = require('./users');
const cards = require('./cards');
const NotFoundError = require('../errors/not-found-err');

router.use('/api/', users);
router.use('/api/', cards);
router.use('/api/*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый ресурс не найден'));
});

module.exports = router;
