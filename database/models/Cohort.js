module.exports = (sequelize, DataTypes) => {
  const Cohort = sequelize.define('cohort', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    cohortType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'cohort_type',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name',
    },
    prefix: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'prefix',
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'start_date',
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'end_date',
    },
    githubTeamName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'github_team_name',
    },
    learnCourseID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'learn_course_id',
    },
    learnCourseName: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'learn_course_name',
    },
  }, {
    tableName: 'cohorts',
  });

  return Cohort;
};
