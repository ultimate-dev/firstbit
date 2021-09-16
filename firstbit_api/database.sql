# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.32)
# Database: firstbit
# Generation Time: 2021-06-10 13:29:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table admins
# ------------------------------------------------------------

DROP TABLE IF EXISTS `admins`;

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;

INSERT INTO `admins` (`admin_id`, `name`, `surname`, `email`, `password`, `status`, `createdAt`, `updatedAt`)
VALUES
	(1,'Admin','Admin','admin@admin.com','$2a$10$0gZ/fEFmvACYCHCAxSV7cOykj5ZKaHdW0lJ06ycKyikKT2bpQdZfO',1,'2021-06-07 06:07:43','2021-06-07 06:07:43');

/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table keys
# ------------------------------------------------------------

DROP TABLE IF EXISTS `keys`;

CREATE TABLE `keys` (
  `key_id` int(11) NOT NULL AUTO_INCREMENT,
  `key` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`key_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `keys` WRITE;
/*!40000 ALTER TABLE `keys` DISABLE KEYS */;

INSERT INTO `keys` (`key_id`, `key`, `user_id`, `status`, `createdAt`, `updatedAt`)
VALUES
	(1,'000000000000',1,1,'2021-06-16 09:39:34','2021-06-16 09:40:58');

/*!40000 ALTER TABLE `keys` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tests
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tests`;

CREATE TABLE `tests` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test` varchar(255) NOT NULL DEFAULT 'false',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`test_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;

INSERT INTO `tests` (`test_id`, `test`, `createdAt`, `updatedAt`)
VALUES
	(1,'put','2021-06-03 20:36:48','2021-06-03 20:36:48'),
	(2,'get','2021-06-03 20:37:00','2021-06-03 20:37:00'),
	(3,'post','2021-06-03 20:40:15','2021-06-03 20:40:15'),
	(4,'put','2021-06-03 20:40:23','2021-06-03 20:40:23'),
	(5,'get','2021-06-03 20:40:28','2021-06-03 20:40:28'),
	(6,'delete','2021-06-03 20:40:31','2021-06-03 20:40:31'),
	(7,'post','2021-06-03 20:42:34','2021-06-03 20:42:34'),
	(8,'get','2021-06-03 20:43:00','2021-06-03 20:43:00'),
	(9,'post','2021-06-03 20:43:10','2021-06-03 20:43:10'),
	(10,'delete','2021-06-03 20:43:13','2021-06-03 20:43:13'),
	(11,'put','2021-06-03 21:28:03','2021-06-03 21:28:03'),
	(12,'post','2021-06-03 21:39:25','2021-06-03 21:39:25'),
	(13,'post','2021-06-03 21:40:55','2021-06-03 21:40:55'),
	(14,'post','2021-06-03 20:52:28','2021-06-03 20:52:28'),
	(15,'delete','2021-06-03 20:52:34','2021-06-03 20:52:34'),
	(16,'get','2021-06-03 20:52:37','2021-06-03 20:52:37'),
	(17,'put','2021-06-03 20:52:40','2021-06-03 20:52:40'),
	(18,'delete','2021-06-04 15:36:24','2021-06-04 15:36:24'),
	(19,'get','2021-06-04 12:53:30','2021-06-04 12:53:30'),
	(20,'delete','2021-06-04 14:13:59','2021-06-04 14:13:59'),
	(21,'delete','2021-06-04 14:59:05','2021-06-04 14:59:05'),
	(22,'delete','2021-06-04 14:59:06','2021-06-04 14:59:06');

/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`user_id`, `name`, `surname`, `email`, `password`, `status`, `createdAt`, `updatedAt`)
VALUES
	(1,'','','','',1,'2021-06-07 06:07:43','2021-06-07 06:07:43'),
	(2,'Sukru Taha','Biyik','skrthbyk@gmail.com','$2a$10$0gZ/fEFmvACYCHCAxSV7cOykj5ZKaHdW0lJ06ycKyikKT2bpQdZfO',1,'2021-06-07 06:07:43','2021-06-10 13:24:51');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
