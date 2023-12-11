-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sdgpdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sdgpdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sdgpdb` DEFAULT CHARACTER SET utf8 ;
USE `sdgpdb` ;

-- -----------------------------------------------------
-- Table `sdgpdb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`city` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(45) NULL,
  PRIMARY KEY (`city_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `user_first_name` VARCHAR(45) NULL,
  `user_last_name` VARCHAR(45) NULL,
  `user_password` VARCHAR(45) NULL,
  `user_email` VARCHAR(45) NULL,
  ` user_mobile` VARCHAR(45) NULL,
  `user_address` VARCHAR(45) NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `city_id`),
  INDEX `fk_user_city2_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_city2`
    FOREIGN KEY (`city_id`)
    REFERENCES `sdgpdb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university` (
  `university_id` INT NOT NULL AUTO_INCREMENT,
  `university_name` VARCHAR(45) NULL,
  `university_contact` VARCHAR(45) NULL,
  `university_email` VARCHAR(45) NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`university_id`, `city_id`),
  INDEX `fk_university_city2_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_city2`
    FOREIGN KEY (`city_id`)
    REFERENCES `sdgpdb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_programs` (
  `university_program_id` INT NOT NULL AUTO_INCREMENT,
  `university_program_name` VARCHAR(45) NULL,
  `university_program_medium` VARCHAR(45) NULL,
  `university_program_duration` VARCHAR(45) NULL,
  `university_program_outline` VARCHAR(45) NULL,
  ` university_program_description` VARCHAR(45) NULL,
  `university_id` INT NOT NULL,
  PRIMARY KEY (`university_program_id`, `university_id`),
  INDEX `fk_university_programs_university2_idx` (`university_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_programs_university2`
    FOREIGN KEY (`university_id`)
    REFERENCES `sdgpdb`.`university` (`university_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university_modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_modules` (
  `university_module_id` INT NOT NULL AUTO_INCREMENT,
  `university_module_name` VARCHAR(45) NULL,
  `university_module_duration` VARCHAR(45) NULL,
  `university_module_description` VARCHAR(45) NULL,
  PRIMARY KEY (`university_module_id`))
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `sdgpdb`.`university_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_programs` (
  `university_program_id` INT NOT NULL AUTO_INCREMENT,
  `university_program_name` VARCHAR(45) NULL,
  `university_program_medium` VARCHAR(45) NULL,
  `university_program_duration` VARCHAR(45) NULL,
  `university_program_outline` VARCHAR(45) NULL,
  ` university_program_description` VARCHAR(45) NULL,
  `university_id` INT NOT NULL,
  PRIMARY KEY (`university_program_id`, `university_id`),
  INDEX `fk_university_programs_university2_idx` (`university_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_programs_university2`
    FOREIGN KEY (`university_id`)
    REFERENCES `sdgpdb`.`university` (`university_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`career`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`career` (
  `career_id` INT NOT NULL AUTO_INCREMENT,
  `career_name` VARCHAR(45) NULL,
  `career_max_salary` VARCHAR(45) NULL,
  `career_min_salary` VARCHAR(45) NULL,
  PRIMARY KEY (`career_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`future_career_plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`future_career_plan` (
  `future_plan_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `career_id` INT NOT NULL,
  PRIMARY KEY (`future_plan_id`, `user_id`, `career_id`),
  INDEX `fk_future_career_plan_user2_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_future_career_plan_career2_idx` (`career_id` ASC) VISIBLE,
  CONSTRAINT `fk_future_career_plan_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_future_career_plan_career2`
    FOREIGN KEY (`career_id`)
    REFERENCES `sdgpdb`.`career` (`career_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`enrolement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`enrolement` (
  `enrolement_id` INT NOT NULL AUTO_INCREMENT,
  `enrolement_date` DATE NULL,
  `enrolement_status` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `university_program_id` INT NOT NULL,
  PRIMARY KEY (`enrolement_id`, `user_id`, `university_program_id`),
  INDEX `fk_enrolement_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_enrolement_university_programs2_idx` (`university_program_id` ASC) VISIBLE,
  CONSTRAINT `fk_enrolement_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrolement_university_programs2`
    FOREIGN KEY (`university_program_id`)
    REFERENCES `sdgpdb`.`university_programs` (`university_program_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`enrolement_modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`enrolement_modules` (
  `enrolement_modules_id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`enrolement_modules_id`))
ENGINE = InnoDB;





-- -----------------------------------------------------
-- Table `sdgpdb`.`university_modules_has_university_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_modules_has_university_programs` (
  `university_module_id` INT NOT NULL,
  `university_program_id` INT NOT NULL,
  PRIMARY KEY (`university_module_id`, `university_program_id`),
  INDEX `fk_university_modules_has_university_programs1_university_p_idx` (`university_program_id` ASC) VISIBLE,
  INDEX `fk_university_modules_has_university_programs1_university_m_idx` (`university_module_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_modules_has_university_programs1_university_mod1`
    FOREIGN KEY (`university_module_id`)
    REFERENCES `sdgpdb`.`university_modules` (`university_module_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_university_modules_has_university_programs1_university_pro1`
    FOREIGN KEY (`university_program_id`)
    REFERENCES `sdgpdb`.`university_programs` (`university_program_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`company` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(45) NULL,
  `company_address` VARCHAR(45) NULL,
  `company_contact` VARCHAR(45) NULL,
  `company_email` VARCHAR(45) NULL,
  `company_description` VARCHAR(45) NULL,
  `company_status` VARCHAR(45) NULL,
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`company_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`company_has_user` (
  `company_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`company_id`, `user_id`),
  INDEX `fk_company_has_user1_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_company_has_user1_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_has_user1_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sdgpdb`.`company` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_user1_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`city` (
  `city_id` INT NOT NULL AUTO_INCREMENT,
  `city_name` VARCHAR(45) NULL,
  PRIMARY KEY (`city_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `user_first_name` VARCHAR(45) NULL,
  `user_last_name` VARCHAR(45) NULL,
  `user_password` VARCHAR(45) NULL,
  `user_email` VARCHAR(45) NULL,
  ` user_mobile` VARCHAR(45) NULL,
  `user_address` VARCHAR(45) NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `city_id`),
  INDEX `fk_user_city2_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_city2`
    FOREIGN KEY (`city_id`)
    REFERENCES `sdgpdb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`career`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`career` (
  `career_id` INT NOT NULL AUTO_INCREMENT,
  `career_name` VARCHAR(45) NULL,
  `career_max_salary` VARCHAR(45) NULL,
  `career_min_salary` VARCHAR(45) NULL,
  PRIMARY KEY (`career_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`company` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(45) NULL,
  `company_address` VARCHAR(45) NULL,
  `company_contact` VARCHAR(45) NULL,
  `company_email` VARCHAR(45) NULL,
  `company_description` VARCHAR(45) NULL,
  `company_status` VARCHAR(45) NULL,
  PRIMARY KEY (`company_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university` (
  `university_id` INT NOT NULL AUTO_INCREMENT,
  `university_name` VARCHAR(45) NULL,
  `university_contact` VARCHAR(45) NULL,
  `university_email` VARCHAR(45) NULL,
  `city_id` INT NOT NULL,
  PRIMARY KEY (`university_id`, `city_id`),
  INDEX `fk_university_city2_idx` (`city_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_city2`
    FOREIGN KEY (`city_id`)
    REFERENCES `sdgpdb`.`city` (`city_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_programs` (
  `university_program_id` INT NOT NULL AUTO_INCREMENT,
  `university_program_name` VARCHAR(45) NULL,
  `university_program_medium` VARCHAR(45) NULL,
  `university_program_duration` VARCHAR(45) NULL,
  `university_program_outline` VARCHAR(45) NULL,
  ` university_program_description` VARCHAR(45) NULL,
  `university_id` INT NOT NULL,
  PRIMARY KEY (`university_program_id`, `university_id`),
  INDEX `fk_university_programs_university2_idx` (`university_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_programs_university2`
    FOREIGN KEY (`university_id`)
    REFERENCES `sdgpdb`.`university` (`university_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`enrolement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`enrolement` (
  `enrolement_id` INT NOT NULL AUTO_INCREMENT,
  `enrolement_date` DATE NULL,
  `enrolement_status` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  `university_program_id` INT NOT NULL,
  PRIMARY KEY (`enrolement_id`, `user_id`, `university_program_id`),
  INDEX `fk_enrolement_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_enrolement_university_programs2_idx` (`university_program_id` ASC) VISIBLE,
  CONSTRAINT `fk_enrolement_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_enrolement_university_programs2`
    FOREIGN KEY (`university_program_id`)
    REFERENCES `sdgpdb`.`university_programs` (`university_program_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university_modules`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_modules` (
  `university_module_id` INT NOT NULL AUTO_INCREMENT,
  `university_module_name` VARCHAR(45) NULL,
  `university_module_duration` VARCHAR(45) NULL,
  `university_module_description` VARCHAR(45) NULL,
  PRIMARY KEY (`university_module_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`future_career_plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`future_career_plan` (
  `future_plan_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `career_id` INT NOT NULL,
  PRIMARY KEY (`future_plan_id`, `user_id`, `career_id`),
  INDEX `fk_future_career_plan_user2_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_future_career_plan_career2_idx` (`career_id` ASC) VISIBLE,
  CONSTRAINT `fk_future_career_plan_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_future_career_plan_career2`
    FOREIGN KEY (`career_id`)
    REFERENCES `sdgpdb`.`career` (`career_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`company_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`company_has_user` (
  `company_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`company_id`, `user_id`),
  INDEX `fk_company_has_user1_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_company_has_user1_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_company_has_user1_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `sdgpdb`.`company` (`company_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_has_user1_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `sdgpdb`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sdgpdb`.`university_modules_has_university_programs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sdgpdb`.`university_modules_has_university_programs` (
  `university_module_id` INT NOT NULL,
  `university_program_id` INT NOT NULL,
  PRIMARY KEY (`university_module_id`, `university_program_id`),
  INDEX `fk_university_modules_has_university_programs1_university_p_idx` (`university_program_id` ASC) VISIBLE,
  INDEX `fk_university_modules_has_university_programs1_university_m_idx` (`university_module_id` ASC) VISIBLE,
  CONSTRAINT `fk_university_modules_has_university_programs1_university_mod1`
    FOREIGN KEY (`university_module_id`)
    REFERENCES `sdgpdb`.`university_modules` (`university_module_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_university_modules_has_university_programs1_university_pro1`
    FOREIGN KEY (`university_program_id`)
    REFERENCES `sdgpdb`.`university_programs` (`university_program_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
