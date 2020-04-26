module.exports = (sequelize, DataTypes) => {
  const Ping = sequelize.define('ping', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: {
      allowNull: false,
      // field: 'room_id',
      type: DataTypes.STRING,
    },
  });

  return Ping;
};
