module.exports = (sequelize, DataTypes) => {
  const SEIPIdentityAndAccess = sequelize.define('seipIdentityAndAccess', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
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
    opportunityID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'student',
      //   key: 'id',
      // },
      field: 'opportunity_id',
    },
  }, {
    tableName: 'seip_identity_and_access',
  });

  return SEIPIdentityAndAccess;
};
