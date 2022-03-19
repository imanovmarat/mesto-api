const { NODE_ENV, JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const BadRequestErr = require('../errors/bad-request-err');
const ServerError = require('../errors/server-error');
const ConflictErr = require('../errors/conflict-err');
const defineValidationError = require('../helpers/definevalidationerror');
const handleCatch = require('../helpers/handlecatch');

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      console.log(JWT_SECRET);
      const token = jwt.sign({ _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'some_key',
        { expiresIn: '7d' });
      res.send({ token });
      /* res
        .cookie('jwt', token, {
          maxAge: 3600000 * 24 * 7,
          httpOnly: true,
          sameSite: true,
        })
        .end(); */
    })
    .catch(next);
};

const createUser = async (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) throw new ConflictErr('Неправильные почта или пароль');
    const newUser = await User.create({
      name, about, avatar, email, password,
    });
    console.log('юзер создан');
    res.status(200).send({
      name: newUser.name,
      about: newUser.about,
      avatar: newUser.avatar,
      email: newUser.email,
      _id: newUser._id,
    });
  } catch (err) {
    console.error(err);
    if (err.name === 'ValidationError') {
      const validationError = new BadRequestErr(`Ошибка валидации: ${defineValidationError(err.errors)}`);
      next(validationError);
    } else if (err.statusCode === 409) {
      next(err);
    } else {
      const internalServerError = new ServerError('Ошибка сервера. Не удалось создать пользователя');
      next(internalServerError);
    }
  }
};

function searchUser(id, res, next) {
  User.findById(id)
    .orFail(() => {
      throw new NotFoundError('Пользователь не найден');
    })
    .then((user) => {
      res.send(user);
      return user;
    })
    .catch((err) => handleCatch(res, err, next));
}

const getUsers = (req, res, next) => {
  User.find({})
    .then((userList) => res.send(userList))
    .catch(() => {
      const internalServerError = new ServerError('Ошибка сервера');
      next(internalServerError);
    });
};

const getUser = (req, res, next) => {
  const { userId } = req.params;
  searchUser(userId, res, next);
};

const getProfileInfo = (req, res, next) => {
  console.log(req);
  const { _id } = req.user;
  searchUser(_id, res, next);
};

const updateProfile = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true })
    .then((profile) => res.send(profile))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const validationError = new BadRequestErr(`Ошибка валидации: ${defineValidationError(err.errors)}`);
        next(validationError);
      } else {
        const internalServerError = new ServerError('Ошибка сервера. Не удалось обновить профиль');
        next(internalServerError);
      }
    });
};

const updateAvatar = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        const validationError = new BadRequestErr(`Ошибка валидации: ${defineValidationError(err.errors)}`);
        next(validationError);
      } else {
        const internalServerError = new ServerError('Ошибка сервера. Не удалось обновить аватар');
        next(internalServerError);
      }
    });
};

module.exports = {
  createUser, login, getUsers, getUser, updateProfile, updateAvatar, getProfileInfo,
};
