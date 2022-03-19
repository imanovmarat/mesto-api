const mongoose = require('mongoose');
const { isEmail, isURL } = require('validator');
const bcrypt = require('bcryptjs');
const UnauthorizedErr = require('../errors/unauthorized-err');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Жак-Ив Кусто',
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: 'Исследователь',
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        /*
        const regex = /^https?:\/\/(www\.)?[a-zA-Z.0-9-]+\.\w[[/a-zA-Z0-9-?.=&_]+]?[#]?/im;
        return v.match(regex); */
        return isURL(v, { protocols: ['http', 'https'] });
      },
      message: 'Неправильный url аватара',
    },
    default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(v) {
        return isEmail(v);
      },
      message: 'Некорректный email',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  return bcrypt.hash(this.password, 10)
    .then((hash) => {
      this.password = hash;
      console.log(this.password);
    })
    .catch(next);
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedErr('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedErr('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
