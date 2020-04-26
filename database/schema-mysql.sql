-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'rating'
--
-- ---
USE `paola_v1_dev`;
DROP TABLE IF EXISTS `ping`;
CREATE TABLE `ping` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `rating` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `rating` (`id`,`rating_check_in`,`rating_accuracy`,`rating_location`,`rating_communication`,`rating_cleanliness`,`rating_value`,`room_id`,`created_at`,`updated_at`) VALUES
-- ('1','5','5','5','5','5','5','1');
INSERT INTO `ping` (`id`,`message`) VALUES ('1', 'pong');
