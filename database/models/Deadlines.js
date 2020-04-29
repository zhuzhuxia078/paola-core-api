module.exports = (sequelize, DataTypes) => {
  const Deadlines = sequelize.define('deadlines', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    groupName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'group_name',
    },
    enrollmentWindowStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'enrollment_window_start_date',
    },
    enrollmentWindowEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'enrollment_window_end_date',
    },
    partOne: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'part_one',
    },
    partTwo: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'part_two',
    },
    partThree: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'part_three',
    },
    cohortId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'cohort',
      //   key: 'id',
      // },
      field: 'cohort_id',
    },
  }, {
    tableName: 'deadlines',
  });

  return Deadlines;
};
