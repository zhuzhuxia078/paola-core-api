module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
    },
    cohortId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      // references: {
      //   model: 'cohort',
      //   key: 'id',
      // },
      field: 'cohort_id',
    },
    deadlinesId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      // references: {
      //   model: 'deadlines',
      //   key: 'id',
      // },
      field: 'deadlines_id',
    },
    techMentorId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'precourse_staff',
      //   key: 'id',
      // },
      field: 'tech_mentor_id',
    },
    partOneDeadlineExtensionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'part_one_deadline_extension_date',
    },
    partTwoDeadlineExtensionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'part_two_deadline_extension_date',
    },
    partThreeDeadlineExtensionDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'part_three_deadline_extension_date',
    },
  }, {
    tableName: 'students',
  });

  return Student;
};
