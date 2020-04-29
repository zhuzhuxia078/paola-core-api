module.exports = (sequelize, DataTypes) => {
  const IdentityAndAccess = sequelize.define('identityAndAccess', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    githubUsername: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'github_username',
    },
    googleGroupEmail: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'google_group_email',
    },
    learnUsername: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'learn_username',
    },
    learnUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'learn_user_id',
    },
    slackUsername: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'slack_username',
    },
    slackUserId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'slack_user_id',
    },
    hasGithubAccess: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'has_github_access',
    },
    hasLearnAccess: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'has_learn_access',
    },
    hasSlackAccess: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'has_slack_access',
    },
    hasGoogleGroupAccess: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0',
      field: 'has_google_group_access',
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
    tableName: 'identity_and_access',
  });

  return IdentityAndAccess;
};
