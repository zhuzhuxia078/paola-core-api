const Sequelize = require('sequelize');
const {
  DB_HOST,
  DB_NAME,
  // DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
} = require('./config');

const connection = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  // port: DB_PORT,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    // timestamps: false,
    underscored: true,
  },
});

connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});

const AssignmentCompletion = require('./models/AssignmentCompletion')(connection, Sequelize);
const AssignmentGrades = require('./models/AssignmentGrades')(connection, Sequelize);
const Campus = require('./models/Campus')(connection, Sequelize);
const ChatBotLog = require('./models/ChatBotLog')(connection, Sequelize);
const Cohort = require('./models/Cohort')(connection, Sequelize);
const Deadlines = require('./models/Deadlines')(connection, Sequelize);
const EnrollmentStaff = require('./models/EnrollmentStaff')(connection, Sequelize);
const EntryQuestionnaireResponse = require('./models/EntryQuestionnaireResponse')(connection, Sequelize);
const IdentityAndAccess = require('./models/IdentityAndAccess')(connection, Sequelize);
const Ping = require('./models/Ping')(connection, Sequelize);
const PrecourseStaff = require('./models/PrecourseStaff')(connection, Sequelize);
const Rating = require('./models/Rating')(connection, Sequelize);
const SalesforceRecord = require('./models/SalesforceRecord')(connection, Sequelize);
const Student = require('./models/Student')(connection, Sequelize);
const SystemLog = require('./models/SystemLog')(connection, Sequelize);

// One-to-One Relationships
Student.hasOne(AssignmentCompletion);
Student.hasOne(AssignmentGrades);
Student.hasOne(Campus);
Student.hasOne(EntryQuestionnaireResponse);
Student.hasOne(EntryQuestionnaireResponse);
Student.hasOne(IdentityAndAccess);
Student.hasOne(SalesforceRecord);
Student.hasOne(SalesforceRecord);
AssignmentCompletion.belongsTo(Student);
AssignmentGrades.belongsTo(Student);
Campus.belongsTo(Student);
EntryQuestionnaireResponse.belongsTo(Student);
EntryQuestionnaireResponse.belongsTo(Student);
IdentityAndAccess.belongsTo(Student);
SalesforceRecord.belongsTo(Student);
SalesforceRecord.belongsTo(Student);

// One-to-Many Relationships
Cohort.hasMany(Deadlines);
Cohort.hasMany(Student);
Deadlines.hasMany(Student);
PrecourseStaff.hasMany(Student);
Deadlines.belongsTo(Cohort);
Student.belongsTo(Cohort);
Student.belongsTo(Deadlines);
Student.belongsTo(PrecourseStaff);

// Many-to-Many Relationships
Cohort.belongsToMany(PrecourseStaff, {
  through: 'cohorts_precourse_staff',
  as: 'precourseStaff',
  foreignKey: 'cohort_id',
  otherKey: 'precourse_staff_id',
});
PrecourseStaff.belongsToMany(Cohort, {
  through: 'cohorts_precourse_staff',
  as: 'cohort',
  foreignKey: 'precourse_staff_id',
  otherKey: 'cohort_id',
});
Campus.belongsToMany(EnrollmentStaff, {
  through: 'campuses_enrollment_staff',
  as: 'enrollmentStaff',
  foreignKey: 'campus_id',
  otherKey: 'enrollment_staff_id',
});
EnrollmentStaff.belongsToMany(Campus, {
  through: 'campuses_enrollment_staff',
  as: 'campus',
  foreignKey: 'enrollment_staff_id',
  otherKey: 'campus_id',
});

connection.sync(/* { force: true } */).then(() => {
  console.log('DB Sync complete!');
});

module.exports = {
  AssignmentCompletion,
  AssignmentGrades,
  Campus,
  ChatBotLog,
  Cohort,
  Deadlines,
  EnrollmentStaff,
  EntryQuestionnaireResponse,
  IdentityAndAccess,
  Ping,
  PrecourseStaff,
  Rating,
  SalesforceRecord,
  Student,
  SystemLog,
};
