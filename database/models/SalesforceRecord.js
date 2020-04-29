module.exports = (sequelize, DataTypes) => {
  const SalesforceRecord = sequelize.define('salesforceRecord', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
    },
    emailSecondary: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'email_secondary',
    },
    campus: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'campus',
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'github',
    },
    courseStartDate: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'course_start_date',
    },
    productCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'product_code',
    },
    separationStatus: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'separation_status',
    },
    separationType: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'separation_type',
    },
    sfdcContactId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sfdc_contact_id',
    },
    sfdcOpportunityId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sfdc_opportunity_id',
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
    tableName: 'salesforce_records',
  });

  return SalesforceRecord;
};
