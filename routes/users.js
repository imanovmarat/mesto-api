const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers, getUser, updateProfile, updateAvatar, getProfileInfo,
} = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/me', getProfileInfo);
router.get('/users/:userId', getUser);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }),
}), updateProfile);
router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(/^https?:\/\/(www\.)?[a-zA-Z.0-9-]+\.\w[[/a-zA-Z0-9-?.=&_]+]?[#]?/im).required(),
  }),
}), updateAvatar);

module.exports = router;
