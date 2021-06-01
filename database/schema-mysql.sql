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

DROP TABLE IF EXISTS `cohorts`;
CREATE TABLE `cohorts` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cohort_type` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `prefix` VARCHAR(255) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `github_team_name` VARCHAR(255) NOT NULL,
  `learn_course_id` INTEGER NOT NULL,
  `learn_course_name` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `first_name_preferred` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `name_pronunciation` VARCHAR(255) NOT NULL,
  `pronouns` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `github` VARCHAR(255) NOT NULL,
  `learn_user_id` VARCHAR(255) NOT NULL,
  `sfdc_contact_id` VARCHAR(255) NOT NULL,
  `profile_image_url` VARCHAR(2083) NULL DEFAULT NULL,
  `operating_system` VARCHAR(255) NOT NULL,
  `birthday` VARCHAR(255) NOT NULL,
  `celebrate_birthday` TINYINT(1) NOT NULL,
  `phone_number` VARCHAR(255) NOT NULL,
  `permanent_address` VARCHAR(2083) NOT NULL,
  `mailing_address` VARCHAR(2083) NOT NULL,
  `while_in_program_address` VARCHAR(2083) NULL DEFAULT NULL,
  `emegency_contact_name` VARCHAR(255) NOT NULL,
  `emegency_contact_relationship` VARCHAR(255) NOT NULL,
  `emergency_contact_phone_number` VARCHAR(255) NOT NULL,
  `prep_experience` VARCHAR(255) NOT NULL,
  `target_campus` VARCHAR(255) NOT NULL,
  `will_commute` TINYINT(1) NOT NULL,
  `commute_length` VARCHAR(255) NULL DEFAULT NULL,
  `outside_obligations` MEDIUMTEXT NULL DEFAULT NULL,
  `dietary_restrictions` VARCHAR(2083) NOT NULL,
  `tshirt_size` VARCHAR(255) NOT NULL,
  `tshirt_fit` VARCHAR(255) NOT NULL,
  `hoody_size` VARCHAR(255) NOT NULL,
  `fun_fact` MEDIUMTEXT NULL DEFAULT NULL,
  `favorite_song` MEDIUMTEXT NULL DEFAULT NULL,
  `was_employed` TINYINT(1) NOT NULL,
  `employment_description` MEDIUMTEXT NULL DEFAULT NULL,
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
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `cohorts_students`;
CREATE TABLE `cohorts_students` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cohort_id` INTEGER NOT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `opportunities`;
CREATE TABLE `opportunities` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `sfdc_opportunity_id` VARCHAR(255) NOT NULL,
  `opportunity_type` VARCHAR(255) NOT NULL,
  `course_start_date` VARCHAR(255) NOT NULL,
  `product_code` VARCHAR(255) NOT NULL,
  `vba_funding_type` VARCHAR(255) NOT NULL,
  `stage` VARCHAR(255) NOT NULL,
  `date_added` VARCHAR(255) NOT NULL,
  `separation_status` VARCHAR(255) NULL DEFAULT NULL,
  `separation_type` VARCHAR(255) NULL DEFAULT NULL,
  `separation_date_of_determination` VARCHAR(255) NULL DEFAULT NULL,
  `separation_reason` VARCHAR(255) NULL DEFAULT NULL,
  `separation_notes` MEDIUMTEXT NULL DEFAULT NULL,
  `deadline_extension_count` INTEGER NOT NULL DEFAULT 0,
  `seip_deadlines_id` INTEGER NOT NULL,
  `tech_mentor_id` INTEGER NOT NULL,
  `cohort_id` INTEGER NOT NULL,
  `campus_id` INTEGER NOT NULL,
  `student_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `seip_deadlines`;
CREATE TABLE `seip_deadlines` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `group_name` VARCHAR(255) NOT NULL,
  `enrollment_window_start_date` VARCHAR(255) NOT NULL,
  `enrollment_window_end_date` VARCHAR(255) NOT NULL,
  `part_one` VARCHAR(255) NOT NULL,
  `part_two` VARCHAR(255) NOT NULL,
  `part_three` VARCHAR(255) NOT NULL,
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
  `slack` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `seip_identity_and_access`;
CREATE TABLE `seip_identity_and_access` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `has_github_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_learn_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_slack_access` TINYINT(1) NOT NULL DEFAULT 0,
  `has_google_group_access` TINYINT(1) NOT NULL DEFAULT 0,
  `opportunity_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `instruction_staff`;
CREATE TABLE `instruction_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `office` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `slack` VARCHAR(255) NULL DEFAULT NULL,
  `github` VARCHAR(255) NULL DEFAULT NULL,
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

DROP TABLE IF EXISTS `cohorts_instruction_staff`;
CREATE TABLE `cohorts_instruction_staff` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `cohort_id` INTEGER NOT NULL,
  `instruction_staff_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `seip_assignment_completion`;
CREATE TABLE `seip_assignment_completion` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `assignment_type` VARCHAR(255) NOT NULL,
  `tests_passing` INTEGER NOT NULL DEFAULT 0
  `opportunity_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `seip_assignment_grades`;
CREATE TABLE `seip_assignment_grades` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `assignment_type` VARCHAR(255) NOT NULL,
  `grade` INTEGER NOT NULL DEFAULT 0,
  `opportunity_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `seip_deadlines` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `seip_identity_and_access` ADD FOREIGN KEY (opportunity_id) REFERENCES `opportunities` (`id`);
ALTER TABLE `campuses_enrollment_staff` ADD FOREIGN KEY (campus_id) REFERENCES `campuses` (`id`);
ALTER TABLE `campuses_enrollment_staff` ADD FOREIGN KEY (enrollment_staff_id) REFERENCES `enrollment_staff` (`id`);
ALTER TABLE `cohorts_instruction_staff` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `cohorts_instruction_staff` ADD FOREIGN KEY (instruction_staff_id) REFERENCES `instruction_staff` (`id`);
ALTER TABLE `seip_assignment_completion` ADD FOREIGN KEY (opportunity_id) REFERENCES `opportunities` (`id`);
ALTER TABLE `seip_assignment_grades` ADD FOREIGN KEY (opportunity_id) REFERENCES `opportunities` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (seip_deadlines_id) REFERENCES `seip_deadlines` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (tech_mentor_id) REFERENCES `instruction_staff` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (campus_id) REFERENCES `campuses` (`id`);
ALTER TABLE `opportunities` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `cohorts_students` ADD FOREIGN KEY (cohort_id) REFERENCES `cohorts` (`id`);
ALTER TABLE `cohorts_students` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `cohorts` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `seip_deadlines` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `enrollment_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `seip_identity_and_access` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `instruction_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `system_logs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `chat_bot_logs` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `campuses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `campuses_enrollment_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cohorts_instruction_staff` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `seip_assignment_completion` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `seip_assignment_grades` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `opportunities` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `cohorts_students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `cohorts` (`id`,`cohort_type`,`name`,`prefix`,`start_date`,`end_date`,`github_team_name`,`learn_course_id`,`learn_course_name`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `seip_deadlines` (`id`,`group_name`,`enrollment_window_start_date`,`enrollment_window_end_date`,`part_one`,`part_two`,`part_three`,`cohort_id`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `enrollment_staff` (`id`,`first_name`,`last_name`,`role`,`office`,`email`,`slack`) VALUES
-- ('','','','','','','');
-- INSERT INTO `seip_identity_and_access` (`id`,`has_github_access`,`has_learn_access`,`has_slack_access`,`has_google_group_access`,`opportunity_id`) VALUES
-- ('','','','','','');
-- INSERT INTO `instruction_staff` (`id`,`first_name`,`last_name`,`program`,`role`,`office`,`email`,`slack`,`github`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `system_logs` (`id`,`event_type`) VALUES
-- ('','');
-- INSERT INTO `chat_bot_logs` (`id`,`event_type`,`sent_to`,`sent_from`,`message`) VALUES
-- ('','','','','');
-- INSERT INTO `students` (`id`,`full_name`,`first_name`,`first_name_preferred`,`last_name`,`name_pronunciation`,`pronouns`,`email`,`github`,`learn_user_id`,`sfdc_contact_id`,`profile_image_url`,`operating_system`,`birthday`,`celebrate_birthday`,`phone_number`,`permanent_address`,`mailing_address`,`while_in_program_address`,`emegency_contact_name`,`emergency_contact_relationship`,`emergency_contact_phone_number`,`prep_experience`,`target_campus`,`will_commute`,`commute_length`,`outside_obligations`,`dietary_restrictions`,`tshirt_size`,`hoody_size`,`fun_fact`,`favorite_song`,`was_employed`,`employment_description`,`educational_enrollment_status`,`programming_experience`,`other_bootcamp_applications`,`was_hr_first_choice`,`first_choice_bootcamp`,`enrollment_selling_point`,`goals_in_attending_hr`,`will_relocate_for_job_search`,`primary_motivation_to_attend_hr`,`personal_strengths`,`personal_growth_areas`,`biggest_foreseen_challenges_at_hr`,`best_motivation_source`,`misc_info_impacting_student_status_or_outcomes`) VALUES
-- ('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','');
-- INSERT INTO `campuses` (`id`,`short_name`,`long_name`) VALUES
-- ('','','');
-- INSERT INTO `campuses_enrollment_staff` (`id`,`campus_id`,`enrollment_staff_id`) VALUES
-- ('','','');
-- INSERT INTO `cohorts_instruction_staff` (`id`,`cohort_id`,`instruction_staff_id`) VALUES
-- ('','','');
-- INSERT INTO `seip_assignment_completion` (`id`,`assignment_type`,`tests_passing`,`notes`,`opportunity_id`) VALUES
-- ('','','','','');
-- INSERT INTO `seip_assignment_grades` (`id`,`assignment_type`,`grade`,`notes`,`opportunity_id`) VALUES
-- ('','','','','');
-- INSERT INTO `opportunities` (`id`,`sfdc_opportunity_id`,`opportunity_type`,`course_start_date`,`product_code`,`vba_funding_type`,`stage`,`date_added`,`separation_status`,`separation_type`,`separation_date_of_determination`,`separation_reason`,`separation_notes`,`deadline_extension_count???`,`seip_deadlines_id`,`tech_mentor_id`,`cohort_id`,`campus_id`,`student_id`) VALUES
-- ('','','','','','','','','','','','','','','','','','','');
-- INSERT INTO `cohorts_students` (`id`,`cohort_id`,`student_id`) VALUES
-- ('','','');
