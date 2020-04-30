DROP DATABASE `paola_v1_dev`;
CREATE DATABASE `paola_v1_dev`;
USE `paola_v1_dev`;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Tables
-- ---

DROP TABLE IF EXISTS `pings`;
CREATE TABLE `pings` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `cohorts`;
CREATE TABLE `cohorts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `prefix` VARCHAR(255) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `github_team_name` VARCHAR(255) NOT NULL,
  `learn_course_id` INTEGER NOT NULL,
  `learn_course_name` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `cohort_id` INTEGER NULL DEFAULT NULL,
  `deadlines_id` INTEGER NULL DEFAULT NULL,
  `tech_mentor_id` INTEGER NOT NULL,
  `part_one_deadline_extension_date` DATE NULL DEFAULT NULL,
  `part_two_deadline_extension_date` DATE NULL DEFAULT NULL,
  `part_three_deadline_extension_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `deadlines`;
CREATE TABLE `deadlines` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `group_name` VARCHAR(255) NOT NULL,
  `enrollment_window_start_date` DATE NOT NULL,
  `enrollment_window_end_date` DATE NOT NULL,
  `part_one` DATE NOT NULL,
  `part_two` DATE NOT NULL,
  `part_three` DATE NOT NULL,
  `cohort_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `enrollment_staff`;
CREATE TABLE `enrollment_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `office` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `slack` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `identity_and_access`;
CREATE TABLE `identity_and_access` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `github_username` VARCHAR(255) NULL DEFAULT NULL,
  `google_group_email` VARCHAR(255) NULL DEFAULT NULL,
  `learn_username` VARCHAR(255) NULL DEFAULT NULL,
  `learn_user_id` INTEGER NULL DEFAULT NULL,
  `slack_username` VARCHAR(255) NULL DEFAULT NULL,
  `slack_user_id` INTEGER NULL DEFAULT NULL,
  `has_github_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_learn_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_slack_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_google_group_access` TINYINT(1) NOT NULL DEFAULT 0,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `precourse_staff`;
CREATE TABLE `precourse_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `office` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `slack` VARCHAR(255) NOT NULL,
  `github` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `system_logs`;
CREATE TABLE `system_logs` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `event_type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `chat_bot_logs`;
CREATE TABLE `chat_bot_logs` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `event_type` VARCHAR(255) NOT NULL,
  `sent_to` VARCHAR(255) NOT NULL,
  `sent_from` VARCHAR(255) NOT NULL,
  `message` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `entry_questionnaire_responses`;
CREATE TABLE `entry_questionnaire_responses` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name_legal` VARCHAR(255) NOT NULL,
  `first_name_preferred` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `name_pronunciation` VARCHAR(255) NOT NULL,
  `pronouns` VARCHAR(255) NOT NULL,
  `gmail_address` VARCHAR(255) NOT NULL,
  `github_handle` VARCHAR(255) NOT NULL,
  `operating_system` VARCHAR(255) NOT NULL,
  `birthday` VARCHAR(255) NOT NULL,
  `celebrate_birthday` TINYINT(1) NOT NULL,
  `phone_number` VARCHAR(255) NOT NULL,
  `permanent_address` VARCHAR(255) NOT NULL,
  `mailing_address` VARCHAR(255) NULL DEFAULT NULL,
  `emegency_contact_name` VARCHAR(255) NOT NULL,
  `emergency_contact_phone_number` INTEGER NULL DEFAULT NULL,
  `prep_precourse_experience` VARCHAR(255) NOT NULL,
  `target_campus` VARCHAR(255) NOT NULL,
  `will_commute` TINYINT(1) NOT NULL,
  `commute_length` VARCHAR(255) NULL DEFAULT NULL,
  `outside_obligations` MEDIUMTEXT NOT NULL,
  `dietary_restrictions` VARCHAR(2083) NOT NULL,
  `tshirt_size` VARCHAR(255) NOT NULL,
  `hoody_size` VARCHAR(255) NOT NULL,
  `fun_fact` MEDIUMTEXT NULL DEFAULT NULL,
  `favorite_song` MEDIUMTEXT NULL DEFAULT NULL,
  `was_employed` TINYINT(1) NOT NULL,
  `employment_description` MEDIUMTEXT NOT NULL,
  `educational_enrollment_status` VARCHAR(2083) NOT NULL,
  `programming_experience` VARCHAR(2083) NOT NULL,
  `other_bootcamp_applications` VARCHAR(2083) NOT NULL,
  `was_hr_first_choice` TINYINT(1) NOT NULL,
  `first_choice_bootcamp` VARCHAR(255) NULL DEFAULT NULL,
  `enrollment_selling_point` VARCHAR(2083) NOT NULL,
  `goals_in_attending_hr` VARCHAR(2083) NOT NULL,
  `will_relocate_for_job_search` TINYINT(1) NOT NULL,
  `primary_motivation_to_attend_hr` VARCHAR(2083) NOT NULL,
  `personal_strengths` MEDIUMTEXT NOT NULL,
  `personal_growth_areas` MEDIUMTEXT NOT NULL,
  `biggest_foreseen_challenges_at_hr` MEDIUMTEXT NOT NULL,
  `best_motivation_source` MEDIUMTEXT NOT NULL,
  `misc_info_impacting_student_status_or_outcomes` MEDIUMTEXT NULL DEFAULT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `campuses`;
CREATE TABLE `campuses` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `short_name` VARCHAR(255) NOT NULL,
  `long_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `campuses_enrollment_staff`;
CREATE TABLE `campuses_enrollment_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `campus_id` INTEGER NOT NULL,
  `enrollment_staff_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `cohorts_precourse_staff`;
CREATE TABLE `cohorts_precourse_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cohort_id` INTEGER NOT NULL,
  `precourse_staff_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `assignment_completion`;
CREATE TABLE `assignment_completion` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `javascript_koans` INTEGER NULL DEFAULT NULL,
  `testbuilder` INTEGER NULL DEFAULT NULL,
  `underbar_part_one` INTEGER NULL DEFAULT NULL,
  `underbar_part_two` INTEGER NULL DEFAULT NULL,
  `underbar_extra_credit` INTEGER NULL DEFAULT NULL,
  `twiddler` INTEGER NULL DEFAULT NULL,
  `recursion` INTEGER NULL DEFAULT NULL,
  `recursion_extra_credit` INTEGER NULL DEFAULT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `assignment_grades`;
CREATE TABLE `assignment_grades` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `javascript_koans` VARCHAR(255) NULL DEFAULT NULL,
  `testbuilder` VARCHAR(255) NULL DEFAULT NULL,
  `underbar_part_one` VARCHAR(255) NULL DEFAULT NULL,
  `underbar_part_two` VARCHAR(255) NULL DEFAULT NULL,
  `underbar_extra_credit` VARCHAR(255) NULL DEFAULT NULL,
  `twiddler` VARCHAR(255) NULL DEFAULT NULL,
  `recursion` VARCHAR(255) NULL DEFAULT NULL,
  `recursion_extra_credit` VARCHAR(255) NULL DEFAULT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `salesforce_records`;
CREATE TABLE `salesforce_records` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `email_secondary` VARCHAR(255) NULL DEFAULT NULL,
  `campus` VARCHAR(255) NOT NULL,
  `github` VARCHAR(255) NULL DEFAULT NULL,
  `course_start_date` VARCHAR(255) NOT NULL,
  `product_code` VARCHAR(255) NOT NULL,
  `stage` VARCHAR(255) NOT NULL,
  `separation_status` VARCHAR(255) NULL DEFAULT NULL,
  `separation_type` VARCHAR(255) NULL DEFAULT NULL,
  `sfdc_contact_id` VARCHAR(255) NOT NULL,
  `sfdc_opportunity_id` VARCHAR(255) NOT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `students` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `students` ADD FOREIGN KEY (deadlines_id) REFERENCES `deadlines` (`id`);
ALTER TABLE `students` ADD FOREIGN KEY (tech_mentor_id) REFERENCES `precourse_staff` (`id`);
ALTER TABLE `deadlines` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `identity_and_access` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `entry_questionnaire_responses` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `campuses_enrollment_staff` ADD FOREIGN KEY (campus_id) REFERENCES `campuses` (`id`);
ALTER TABLE `campuses_enrollment_staff` ADD FOREIGN KEY (enrollment_staff_id) REFERENCES `enrollment_staff` (`id`);
ALTER TABLE `cohorts_precourse_staff` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `cohorts_precourse_staff` ADD FOREIGN KEY (precourse_staff_id) REFERENCES `precourse_staff` (`id`);
ALTER TABLE `assignment_completion` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `assignment_grades` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `salesforce_records` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `pings` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cohorts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `deadlines` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `enrollment_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `identity_and_access` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `precourse_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `system_logs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `chat_bot_logs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `entry_questionnaire_responses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `campuses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `campuses_enrollment_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cohorts_precourse_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `assignment_completion` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `assignment_grades` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `salesforce_records` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `pings` (`id`,`message`) VALUES ('1', 'pong');
-- INSERT INTO `cohorts` (`id`,`name`,`prefix`,`start_date`,`end_date`,`github_team_name`,`learn_course_id`,`learn_course_name`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `students` (`id`,`email`,`cohort_id`,`deadlines_id`,`tech_mentor_id`,`part_one_deadline_extension_date`,`part_two_deadline_extension_date`,`part_three_deadline_extension_date`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `deadlines` (`id`,`group_name`,`enrollment_window_start_date`,`enrollment_window_end_date`,`part_one`,`part_two`,`part_three`,`cohort_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `enrollment_staff` (`id`,`first_name`,`last_name`,`role`,`office`,`email`,`slack`) VALUES
-- ('','','','','','','');
-- INSERT INTO `identity_and_access` (`id`,`github_username`,`google_group_email`,`learn_username`,`learn_user_id`,`slack_username`,`slack_user_id`,`has_github_access`,`has_learn_access`,`has_slack_access`,`has_google_group_access`,`student_id`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `precourse_staff` (`id`,`first_name`,`last_name`,`role`,`office`,`email`,`slack`,`github`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `system_logs` (`id`,`event_type`) VALUES
-- ('','');
-- INSERT INTO `chat_bot_logs` (`id`,`event_type`,`sent_to`,`sent_from`,`message`) VALUES
-- ('','','','','');
-- INSERT INTO `entry_questionnaire_responses` (`id`,`first_name_legal`,`first_name_preferred`,`last_name`,`name_pronunciation`,`pronouns`,`gmail_address`,`github_handle`,`operating_system`,`birthday`,`celebrate_birthday`,`phone_number`,`permanent_address`,`mailing_address`,`emegency_contact_name`,`emergency_contact_phone_number`,`prep_precourse_experience`,`target_campus`,`will_commute`,`commute_length`,`outside_obligations`,`dietary_restrictions`,`tshirt_size`,`hoody_size`,`fun_fact`,`favorite_song`,`was_employed`,`employment_description`,`educational_enrollment_status`,`programming_experience`,`other_bootcamp_applications`,`was_hr_first_choice`,`first_choice_bootcamp`,`enrollment_selling_point`,`goals_in_attending_hr`,`will_relocate_for_job_search`,`primary_motivation_to_attend_hr`,`personal_strengths`,`personal_growth_areas`,`biggest_foreseen_challenges_at_hr`,`best_motivation_source`,`misc_info_impacting_student_status_or_outcomes`,`student_id`) VALUES
-- ('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','');
-- INSERT INTO `campuses` (`id`,`short_name`,`long_name`) VALUES
-- ('','','');
-- INSERT INTO `campuses_enrollment_staff` (`id`,`campus_id`,`enrollment_staff_id`) VALUES
-- ('','','');
-- INSERT INTO `cohorts_precourse_staff` (`id`,`cohort_id`,`precourse_staff_id`) VALUES
-- ('','','');
-- INSERT INTO `assignment_completion` (`id`,`javascript_koans`,`testbuilder`,`underbar_part_one`,`underbar_part_two`,`underbar_extra_credit`,`twiddler`,`recursion`,`recursion_extra_credit`,`student_id`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `assignment_grades` (`id`,`javascript_koans`,`testbuilder`,`underbar_part_one`,`underbar_part_two`,`underbar_extra_credit`,`twiddler`,`recursion`,`recursion_extra_credit`,`student_id`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `salesforce_records` (`id`,`full_name`,`email`,`email_secondary`,`campus`,`github`,`course_start_date`,`product_code`,`stage`,`separation_status`,`separation_type`,`sfdc_contact_id`,`sfdc_opportunity_id`,`student_id`) VALUES
-- ('','','','','','','','','','','','','','');
