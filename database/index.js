const Sequelize = require('sequelize');
const { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD } = require('./config');

const PingModel = require('./models/ping');

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  // port: DB_PORT,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    // timestamps: false,
    underscored: true,
  },
});

connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

const Ping = PingModel(connection, Sequelize);

connection.sync(/*{ force: true }*/).then(() => {
  console.log('DB Sync complete!');
});

module.exports = {
  Ping,
};
