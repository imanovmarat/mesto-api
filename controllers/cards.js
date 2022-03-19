const Card = require('../models/card');
const defineValidationError = require('../helpers/definevalidationerror');
const ServerError = require('../errors/server-error');
const BadRequestErr = require('../errors/bad-request-err');
const ConflictErr = require('../errors/conflict-err');
const NotFoundError = require('../errors/not-found-err');
const handleCatch = require('../helpers/handlecatch');

const getCards = (req, res, next) => {
  Card.find({})
    .then((data) => res.send(data.reverse()))
    .catch((err) => {
      console.error('err = ', err);
      const internalServerError = new ServerError('Ошибка сервера. Не удалось создать пользователя');
      next(internalServerError);
    });
};

const createCard = (req, res, next) => {
  const owner = req.user._id;
  const { name, link } = req.body;
  Card.create({ name, link, owner })
    .then((card) => res.send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const validationError = new BadRequestErr(`Ошибка валидации: ${defineValidationError(err.errors)}`);
        next(validationError);
      } else {
        const internalServerError = new ServerError('Ошибка сервера. Не удалось создать карточку');
        next(internalServerError);
      }
    });
};

const deleteCard = async (req, res, next) => {
  const { cardId } = req.params;
  const userId = req.user._id;
  try {
    const cardOwnerId = await Card.findById(cardId)
      .populate('owner')
      .exec()
      .then((cardData) => cardData.owner._id.toString());
    if (cardOwnerId === userId) {
      const cardRemoval = await Card.findByIdAndRemove(cardId);
      res.send(cardRemoval);
    } else {
      throw new ConflictErr('Вы не можете удалить чужую карточку');
    }
  } catch (err) {
    console.error(err);
    handleCatch(res, err, next);
  }
};

const likeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
)
  .orFail(() => {
    throw new NotFoundError('Карточка не найдена');
  })
  .then((status) => {
    console.log(status);
    res.send(status);
  })
  .catch((err) => handleCatch(res, err, next));

const dislikeCard = (req, res, next) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
)
  .orFail(() => {
    throw new NotFoundError('Карточка не найдена');
  })
  .then((status) => {
    console.log(status);
    res.send(status);
  })
  .catch((err) => handleCatch(res, err, next));

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
