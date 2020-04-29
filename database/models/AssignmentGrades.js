module.exports = (sequelize, DataTypes) => {
  const AssignmentGrades = sequelize.define('assignmentGrades', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    javascriptKoans: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'javascript_koans',
    },
    testbuilder: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'testbuilder',
    },
    underbarPartOne: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'underbar_part_one',
    },
    underbarPartTwo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'underbar_part_two',
    },
    underbarExtraCredit: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'underbar_extra_credit',
    },
    twiddler: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'twiddler',
    },
    recursion: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'recursion',
    },
    recursionExtraCredit: {
      type: DataTypes.STRING(255),
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
    tableName: 'assignment_grades',
  });

  return AssignmentGrades;
};
