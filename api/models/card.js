const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        // ^https?:\/\/(www\.)?[a-z\.0-9-]+[[\/a-z]+]?
        const regex = /^https?:\/\/(www\.)?[a-zA-Z.0-9-]+\.\w[[/a-zA-Z0-9-?.=&_]+]?[#]?/im;
        return v.match(regex);
      },
      message: 'Неправильная ссылка на картинку',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    default: [],
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
