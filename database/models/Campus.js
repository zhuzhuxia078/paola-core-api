module.exports = (sequelize, DataTypes) => {
  const Campus = sequelize.define('campus', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    shortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'short_name',
    },
    longName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'long_name',
    },
  }, {
    tableName: 'campuses',
  });

  return Campus;
};
