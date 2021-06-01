// TODO: Complete after work with Isto and Murph is done on Form Upgrades
module.exports = (sequelize, DataTypes) => {
  const Opportunity = sequelize.define('opportunity', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    SFDCOpportunityID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sfdc_opportunity_id',
    },
    opportunityType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'opportunity_type',
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
    VBAFundingType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'vba_funding_type',
    },
    stage: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'stage',
    },
    dateAdded: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'date_added',
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
    separationDateOfDetermination: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'separation_date_of_determination',
    },
    separationReason: {
      type: DataTypes.STRING(2083),
      allowNull: true,
      field: 'separation_reason',
    },
    separationNotes: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'separation_notes',
    },
    deadlineExtensionCount: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'deadline_extension_count',
    },
    seipDeadlinesID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'seipDeadlines',
      //   key: 'id',
      // },
      field: 'seip_deadlines_id',
    },
    techMentorID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'instructionStaff',
      //   key: 'id',
      // },
      field: 'tech_mentor_id',
    },
    cohortID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'cohort',
      //   key: 'id',
      // },
      field: 'cohort_id',
    },
    campusID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'campus',
      //   key: 'id',
      // },
      field: 'campus_id',
    },
    studentID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      // references: {
      //   model: 'student',
      //   key: 'id',
      // },
      field: 'student_id',
    },
  }, {
    tableName: 'opportunities',
  });

  return Opportunity;
};
