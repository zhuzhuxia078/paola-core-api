const app = require('./server.js');
const db = require('../database');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
