const apiRouter = require('express').Router();
const { pings } = require('../database/controllers/ping');
const { students } = require('../database/controllers/students');

apiRouter.get('/ping', pings.get);
apiRouter.post('/ping', pings.post);
apiRouter.put('/ping', pings.put);
apiRouter.patch('/ping', pings.patch);
apiRouter.delete('/ping', pings.delete);

apiRouter.get('/students', students.get);
apiRouter.post('/students', students.post);
apiRouter.put('/students', students.put);
apiRouter.patch('/students', students.patch);
apiRouter.delete('/students', students.delete);

module.exports = apiRouter;
