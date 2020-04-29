module.exports = (sequelize, DataTypes) => {
  const PrecourseStaff = sequelize.define('precourseStaff', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'last_name',
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'role',
    },
    office: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'office',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
    },
    slack: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'slack',
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'github',
    },
  }, {
    tableName: 'precourse_staff',
  });

  return PrecourseStaff;
};
