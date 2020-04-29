module.exports = (sequelize, DataTypes) => {
  const Ping = sequelize.define('ping', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'message',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at',
    },
  }, {
    tableName: 'pings',
  });

  return Ping;
};
