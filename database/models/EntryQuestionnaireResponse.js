// TODO: Complete after work with Isto and Murph is done on Form Upgrades
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
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
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'first_name',
    },
    firstNamePreferred: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'first_name_preferred',
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'last_name',
    },
    namePronunciation: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name_pronunciation',
    },
    pronouns: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'pronouns',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email',
    },
    github: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'github',
    },
    learnUserID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'learn_user_id',
    },
    sfdcContactID: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'sfdc_contact_id',
    },
    profileImageURL: {
      type: DataTypes.STRING(2083),
      allowNull: true,
      field: 'profile_image_url',
    },
    operatingSystem: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'operating_system',
    },
    birthday: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'birthday',
    },
    celebrateBirthday: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'celebrate_birthday',
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number',
    },
    permanentAddress: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'permanent_address',
    },
    mailingAddress: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'mailing_address',
    },
    whileInProgramAddress: {
      type: DataTypes.STRING(2083),
      allowNull: true,
      field: 'while_in_program_address',
    },
    emegencyContactName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'emegency_contact_name',
    },
    emegencyContactRelationship: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'emegency_contact_relationship',
    },
    emergencyContactPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'emergency_contact_phone_number',
    },
    prepExperience: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'prep_experience',
    },
    targetCampus: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'target_campus',
    },
    willCommute: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'will_commute',
    },
    commuteLength: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'commute_length',
    },
    outsideObligations: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'outside_obligations',
    },
    dietaryRestrictions: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'dietary_restrictions',
    },
    tshirtSize: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'tshirt_size',
    },
    tshirtFit: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'tshirt_fit',
    },
    hoodySize: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'hoody_size',
    },
    funFact: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'fun_fact',
    },
    favoriteSong: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'favorite_song',
    },
    wasEmployed: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'was_employed',
    },
    employmentDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'employment_description',
    },
    educationalEnrollmentStatus: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'educational_enrollment_status',
    },
    programmingExperience: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'programming_experience',
    },
    otherBootcampApplications: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'other_bootcamp_applications',
    },
    wasHrFirstChoice: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'was_hr_first_choice',
    },
    firstChoiceBootcamp: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'first_choice_bootcamp',
    },
    enrollmentSellingPoint: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'enrollment_selling_point',
    },
    goalsInAttendingHr: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'goals_in_attending_hr',
    },
    willRelocateForJobSearch: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      field: 'will_relocate_for_job_search',
    },
    primaryMotivationToAttendHr: {
      type: DataTypes.STRING(2083),
      allowNull: false,
      field: 'primary_motivation_to_attend_hr',
    },
    personalStrengths: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'personal_strengths',
    },
    personalGrowthAreas: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'personal_growth_areas',
    },
    biggestForeseenChallengesAtHr: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'biggest_foreseen_challenges_at_hr',
    },
    bestMotivationSource: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'best_motivation_source',
    },
    miscInfoImpactingStudentStatusOrOutcomes: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'misc_info_impacting_student_status_or_outcomes',
    },
  }, {
    tableName: 'students',
  });

  return Student;
};
