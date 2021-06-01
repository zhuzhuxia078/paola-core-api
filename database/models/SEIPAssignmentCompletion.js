module.exports = (sequelize, DataTypes) => {
  const SEIPAssignmentCompletion = sequelize.define('seipAssignmentCompletion', {
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
    testsPassing: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'tests_passing',
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

  return SEIPAssignmentCompletion;
};
