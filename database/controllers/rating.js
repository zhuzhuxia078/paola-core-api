const Rating = require('../models/rating.js');

module.exports = {
  ratings: {
    get: (req, res) => {
      const roomId = Number(req.params.roomId);
      Rating.find({ roomId })
        .then(ratings => {
          res.json(ratings);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    },
    post: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    put: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    patch: (req, res) => {
      res.status(405).send('Method not allowed.');
    },
    delete: (req, res) => {
      res.status(405).send('Method not allowed.');
    }
  },
};
