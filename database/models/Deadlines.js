module.exports = (sequelize, DataTypes) => {
  const SEIPDeadlines = sequelize.define('seipDeadlines', {
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
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'enrollment_window_start_date',
    },
    enrollmentWindowEndDate: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'enrollment_window_end_date',
    },
    partOne: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'part_one',
    },
    partTwo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'part_two',
    },
    partThree: {
      type: DataTypes.STRING(255),
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
    tableName: 'seip_deadlines',
  });

  return SEIPDeadlines;
};
