DROP DATABASE IF EXISTS `OngAnimais`;
CREATE DATABASE `OngAnimais`;
USE `OngAnimais`;

DROP TABLE IF EXISTS `Species`;
CREATE TABLE `Species` (
	`idSpecie` bigint NOT NULL AUTO_INCREMENT,
	`name` varchar(20) NOT NULL,
	`status` bool NOT NULL,
	PRIMARY KEY (`idSpecie`)
);