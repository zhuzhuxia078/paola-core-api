module.exports = (sequelize, DataTypes) => {
  const SystemLog = sequelize.define('systemLog', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    eventType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'event_type',
    },
  }, {
    tableName: 'system_logs',
  });

  return SystemLog;
};
