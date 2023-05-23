const usersModel = require('../models/card');

const getCards = (req, res) => {
  usersModel.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal Server Error',
        err: err.message,
        stack: err.stack,
      });
    });
};

const creatCard = (req, res) => {
  usersModel.create({
    owner: req.user._id,
    ...req.body,
  })
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Internal Server Error',
        err: err.message,
        stack: err.stack,
      });
    });
};

const deleteCard = (req, res) => {
  usersModel.findByIdAndRemove(req.params.cardId)
    .orFail(() => {
      throw new Error('Notfound');
    })
    .then(card => res.send({ message: "Пост удалён" }))
    .catch((err) => {
      if (err.message === 'Notfound') {
        res.status(404).send({ message: 'Card not found' });
        return;
      };
      res.status(500).send({
        message: 'Internal Server Error',
        err: err.message,
        stack: err.stack,
      });
    });
};

module.exports = {
  getCards,
  creatCard,
  deleteCard,
};
