const { Ping } = require('../');

module.exports = {
  pings: {
    get: async (req, res) => {
      try {
        const pings = await Ping.findAll({});
        res.json(pings);
      } catch (err) {
        res.status(500).send(err);
      }
    },
    post: async (req, res) => {
      const { message } = req.body;
      try {
        const ping = await Ping.create({ message });
        res.status(201).json(ping);
      } catch (err) {
        res.status(500).send(err);
      }
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
