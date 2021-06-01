module.exports = (sequelize, DataTypes) => {
  const SEIPAssignmentGrades = sequelize.define('seipAssignmentGrades', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    assignmentType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'assignment_type',
    },
    grade: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'grade',
    },
    opportunityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'opportunity',
      //   key: 'id',
      // },
      field: 'opportunity_id',
    },
  }, {
    tableName: 'seip_assignment_completion',
  });

  return SEIPAssignmentGrades;
};
