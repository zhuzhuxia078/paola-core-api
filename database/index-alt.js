const Sequelize = require('sequelize');
const { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD } = require('./config');

const Ping = require('./models/ping');
const Rating = require('./models/rating');

const connect = async () => {
  const db = {};
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

  try {
    await connection.authenticate();
    const Ping = Ping(connection, Sequelize);
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // If the Node process ends, close the Sequelize connection
  process.on('SIGINT', async () => {
    await connection.close();
    console.log('Sequelize connection disconnected due to app termination');
    process.exit(0);
  });

  // db.Sequelize = Sequelize;
  db.connection = connection;
  // db.Ping = Ping(connection, Sequelize);
  // db.Rating = Rating(connection, Sequelize);
  // const Ping = Ping(connection, Sequelize);
  db.connection.Ping = Ping;
  // await connection.sync({ force: true });
  // console.log('The table for the Rating model was just (re)created!');

  // Return the DB connection
  return db;
};

module.exports.connect = connect;
