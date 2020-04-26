const apiRouter = require('express').Router();
const { pings } = require('../database/controllers/ping');

apiRouter.get('/ping', pings.get);
apiRouter.post('/ping', pings.post);
apiRouter.put('/ping', pings.put);
apiRouter.patch('/ping', pings.patch);
apiRouter.delete('/ping', pings.delete);

module.exports = apiRouter;
