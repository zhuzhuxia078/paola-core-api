const { Student } = require('..');

module.exports = {
  students: {
    get: async (req, res) => {
      try {
        const students = await Student.findAll({});
        res.json(students);
      } catch (err) {
        res.status(500).send(err);
      }
    },
    post: async (req, res) => {
      const { message } = req.body;
      try {
        const student = await Student.create({ message });
        res.status(201).json(student);
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
    },
  },
};
