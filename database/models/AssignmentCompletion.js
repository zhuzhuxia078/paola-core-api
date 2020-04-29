module.exports = (sequelize, DataTypes) => {
  const AssignmentCompletion = sequelize.define('assignmentCompletion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    javascriptKoans: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'javascript_koans',
    },
    testbuilder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'testbuilder',
    },
    underbarPartOne: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'underbar_part_one',
    },
    underbarPartTwo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'underbar_part_two',
    },
    underbarExtraCredit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'underbar_extra_credit',
    },
    twiddler: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'twiddler',
    },
    recursion: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'recursion',
    },
    recursionExtraCredit: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'recursion_extra_credit',
    },
    studentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'student',
      //   key: 'id',
      // },
      field: 'student_id',
    },
  }, {
    tableName: 'assignment_completion',
  });

  return AssignmentCompletion;
};
