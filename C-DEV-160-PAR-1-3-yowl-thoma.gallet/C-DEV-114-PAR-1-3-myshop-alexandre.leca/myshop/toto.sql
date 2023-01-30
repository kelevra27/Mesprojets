-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: my_shop
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `price` int NOT NULL DEFAULT '0',
  `category_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `admin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Alex','$2y$10$RV493dwHfb4jCAzy166NfOdXjIzHkAVUJOnkydHfF7cbPv5edtZvm','Alex@email.com',1),(2,NULL,'$2y$10$jLPHP4RH5VVATwFsNmhLpOvAuhocgJX5l3OureflT0J14rKZEpetm',NULL,1),(3,NULL,'$2y$10$THfZs.0JrF.TcVGvyxrXAuI0nrhNRcB0.ky3jfjp/2j7DARxNee52',NULL,1),(4,'rufus','$2y$10$AlJhcqnkBFGoxvBgHc6D0Od0/K0/4rmlTsh/uGcTBTldsLh2ggltC','rufus@email.com',1),(5,'rufus','$2y$10$HeFd7CtpYoja3ffQXg509ekavzmA3UInED1EAZHW0SfEUYxxY.hdW','rufus@email.com',1),(6,'rufus','$2y$10$uYVBPuhwznKHLHgFMCqvAOkZf1s7wmMUno6gIg2NrPFpQ/WP0Fl/S','rufus@email.com',1),(7,'rufus','$2y$10$lT16wwD/cNsk1lbAcJWn2.Ag6lYQerlS63GksyfvcD8z1zCCPDpUS','rufus@email.com',1),(8,NULL,'$2y$10$WkB0zhS7/KsePHVlu9medeOR7a1yABr4d9ammjHGw3DWEopvL6nIq',NULL,1),(9,NULL,'$2y$10$HQDFhe23zM4xvQST8nP5WeWHKVcPpAWQiVbrwN/jZ.nqGJqS1.Qh2',NULL,1),(10,NULL,'$2y$10$Ly3fZhRrwgN8YUEGMSd.b.hCOatzSPOiBf5zSyjisl2FuDITrT4Je',NULL,1),(11,NULL,'$2y$10$8U0aT5TxgLa1zx4QVFTu8OlOJQCbiM.fNsEhxiWCFHXm9f9pO9762',NULL,1),(12,'ngngngn','','akukuh@ghgj',1),(13,'ngngngn','','akukuh@ghgj',1),(14,'ngngngn','','akukuh@ghgj',1),(15,'ngngngn','','akukuh@ghgj',1),(16,'ngngngn','','akukuh@ghgj',1),(17,'ngngngn','','akukuh@ghgj',1),(18,'ngngngn','','akukuh@ghgj',1),(19,'ngngngn','','akukuh@ghgj',1),(20,'ngngngn','','akukuh@ghgj',1),(21,'ngngngn','','akukuh@ghgj',1),(22,'ngngngn','','akukuh@ghgj',1),(23,'ngngngn','','akukuh@ghgj',1),(24,'ngngngn','','akukuh@ghgj',1),(25,'ngngngn','','akukuh@ghgj',1),(26,'ngngngn','','akukuh@ghgj',1),(27,'ngngngn','','akukuh@ghgj',1),(28,'ngngngn','','akukuh@ghgj',1),(29,'ngngngn','','akukuh@ghgj',1),(30,'ngngngn','','akukuh@ghgj',1),(31,'ngngngn','','akukuh@ghgj',1),(32,'ngngngn','','akukuh@ghgj',1),(33,'ngngngn','','akukuh@ghgj',1),(34,'ngngngn','','akukuh@ghgj',1),(35,'ngngngn','','akukuh@ghgj',1),(36,NULL,'$2y$10$uyPjcUTr/icMvGjHBuo84upmUYP6S9.uYMn3p59hleFOErB4IxSG6',NULL,1),(37,NULL,'$2y$10$q7IZG0Jdey68Pn/WA0X7a..608iwBhZFSGuJ/kC7s8..nBCQpgJO.',NULL,1),(38,NULL,'$2y$10$3c5Ebp3l88ZZS4SRvDXVUeeI1VBVio9O.cbq5KD4pMO0vcXN8LRRi',NULL,1),(39,NULL,'$2y$10$IDLA.OEZP8IrVvC7Qhx8ueQNJ91VS0QJ60sYLOsqEDnA.RYnhRLpK',NULL,1),(40,NULL,'$2y$10$/xm868mXzhUe4R/MWR0Gd.3fViNask/6eTpfhIVWgVTbGybVbPp2u',NULL,1),(41,NULL,'$2y$10$yVLEIgHI8ZfpYVv/nsdFGeqLWRSRy97KDgVgKd2YOMVgljrTfAFVq',NULL,1),(42,NULL,'$2y$10$KJivhB6y2y5Xa2tQTCwdQeyZfgaGrqStSkrOgkKlJr7sxC1B8fsEO',NULL,1),(43,NULL,'$2y$10$5f2Y6QZt016G5tP6sOxWUOg0vZE17rBUt411zJBO/ArdnQ3hNo2Dm',NULL,1),(44,NULL,'$2y$10$jgairXrITPufchC.VK4vsexfNQLeMiTZe97DHpJTTaThKpWuK/042',NULL,1),(45,NULL,'$2y$10$KaUBrorcLyfGtQ50QtZEneIZk9xRof3waIn044Gk.tKHUWa5jdLXa',NULL,1),(46,NULL,'$2y$10$7bj.OycCY58S6xuJotk3K.R/GjJ.zlG.pCzOs1vhqMQIWe8LlwEUq',NULL,1),(47,NULL,'$2y$10$yzrWVaycIHSOhojXzlIUSe5OKEwzTUUKhNmViw2mGG4jrsgF8rN5y',NULL,1),(48,NULL,'$2y$10$fQD1mAsBeDEA/c0mFJcUreI2Ry0OvlbcH3cze/GMiz9T.VNoModtq',NULL,1),(49,NULL,'$2y$10$EMmYaNVLmH7HEClj0AN1NeFAT2c6X9pT.G/X7e1vGyspEPKGEd.D.',NULL,1),(50,NULL,'$2y$10$heHYLk9/fHCiDr/EvGuWQO818yAqscel7gjQuF10ugJNf84UlKZ.2',NULL,1),(51,NULL,'$2y$10$Vt1tcpF8cbA3OAL2heo73.jOCD6gf1HlAqBXrc0cJD67gcU3wBS1m',NULL,1),(52,NULL,'$2y$10$zPU5ckByBG5d201AKLCZd.nni/WdJgDObiWacdDYgEUOHNiXBnk6W',NULL,1),(53,NULL,'$2y$10$MjRq6wzGdzJk/jT43x0NTeq6pEmAOCUHlMBDPrMFFVWMAN19KBG/K',NULL,1),(54,NULL,'$2y$10$ZHZz5SD6a37iO3SRcULFd.gcoY/POBqkKmXMroPgHixFAtt3tGXAO',NULL,1),(55,NULL,'$2y$10$CLlOOsJF3t9eBulfo7b.CuIWO8vgeJci2oLZRuCdUfAPCDD1yBd7q',NULL,1),(56,NULL,'$2y$10$Zjc.9kih25UyfnylPwq.YeO83uWAOdiqtegGcAKBsbslBzOeDeZ42',NULL,1),(57,NULL,'$2y$10$9jA9n8POPrcVq7koIsFFm.Br2WUTIKsCfZ8.yLE9EqNfdRfABDCk6',NULL,1),(58,NULL,'$2y$10$3.Jgy8GBZGRnO42Ly47bKOjV0QQaRsWlZ7IEN/dIOrR2gjTBFf2au',NULL,1),(59,NULL,'$2y$10$karl9nXtCreFs5KWch2nJ.55JheXzG0/O0WMlAYKRs4FZIVO/sonu',NULL,1),(60,NULL,'$2y$10$CaaRoFpDCrxXcmnd49wtWOEVjFHJXhKtbjIgYrlh9eGwHHeeFR9MS',NULL,1),(61,NULL,'$2y$10$6Y0L8rbDHMjdA7JYligxu.wIpaJbIiemu6qawTOp4ML3mGB5IlnQ.',NULL,1),(62,NULL,'$2y$10$SHf5Tt8M4c2fqiTefx4ND.Fr1Q93sPpKmuUctVqgNEmLFDyFqBAv.',NULL,1),(63,NULL,'$2y$10$/aSqM.MaHWT47be44ubaTeVhdqnNKAP6WqynmlQAVWlVgWyxeT.Rm',NULL,1),(64,NULL,'$2y$10$1tizEIzxkqKO8WwfRViAY.CprXiKSyzMROycYZ79fk.WlptTuGzPC',NULL,1),(65,NULL,'$2y$10$dYGqLqF0UGSBJVLAYrifjutgDpruH73F/LVtJ4828wyQBvKV8YXK6',NULL,1),(66,NULL,'$2y$10$pXRk/w2C7EGreBdUTWRh.eFxnVdVf7bgydFVvGcubsMFyOe7QukJq',NULL,1),(67,NULL,'$2y$10$k0IUjtToOF0pgUa6hXHNPe6/1klNFjwArHLocFwbJNeS23uIAj1iC',NULL,1),(68,NULL,'$2y$10$S3OqJllcLzSAEZzVwK44SupzoMLqwBtFdaqe8aJzJNvSD4c7J8mQi',NULL,1),(69,NULL,'$2y$10$uCASdejvKrOd3q7iyiaOKepEGRx2eQtDercxm2.yvp4K/FFUnPtHW',NULL,1),(70,NULL,'$2y$10$hnpI9Ass8M2/rRl68IKpHuqAbSIhvJq8.AfCHshAjEzqP6ePD0qoG',NULL,1),(71,NULL,'$2y$10$Sv2KgFsrbReV8ychBKUU0ewTRi8cxGlI4HcJzJwk6GQtVGwd8XPhC',NULL,1),(72,NULL,'$2y$10$A5jXeYBZbzRQr/Hz2bTsguTPe99j8aoSOgKFY5oIXJ3Y6jtc0WM/W',NULL,1),(73,NULL,'$2y$10$Jtpoudp4s7GUJWcPyLouuuR8yhJo46Xyvyf4ImW4QNGOoN7vfdsN2',NULL,1),(74,NULL,'$2y$10$TA5KmVsyuUD/5dVbF/M4R.jZNJbnODkLn4j4xlsbvkjpjqM9Znkne',NULL,1),(75,NULL,'$2y$10$uwZpsB98eAh6HZPdvKDHO.nswFR9wj2EERI7uaDoqAPuhdpXrUsfm',NULL,1),(76,NULL,'$2y$10$RxoEe7U64nxBBfRcTKIfyOyvRmOQMa9CJJKKATHvmw9D70kLcchR6',NULL,1),(77,NULL,'$2y$10$jcAfg1bvOqMbUpt/65.yr.wvqR5PzT5a9fV1PthHrPdf1zqpLYTw.',NULL,1),(78,NULL,'$2y$10$WNpvTL97Nn9RQ6bsOQf1deXUEU/Ft1/LtUbS3FSjUVTHqRHl2INba',NULL,1),(79,NULL,'$2y$10$GQkbXoUPJhqjR0hGu0NF/O/rQdswEbMEHycJU7KwdcdQilJ3ctUYO',NULL,1),(80,NULL,'$2y$10$wtVpMXU.SG5K1e/Ss.RWd.xBV6To33x0XynaO3uCc6gVoFLdNrLS.',NULL,1),(81,NULL,'$2y$10$8HyaSYN1JBB9jQIU.1GjluWRbP4dpbi88t6jPNjjlFtWEVuTswOe6',NULL,1),(82,NULL,'$2y$10$1B.6g6fQV759d7cg0kRd4ukQs246qWP.8kS/hhhWSKa8SLiLB/LKO',NULL,1),(83,NULL,'$2y$10$ofe3PebY4Cy5uBZdChFloO5nVNF8Mh0yGrrWLZN6vFUToBUkfZ2nS',NULL,1),(84,NULL,'$2y$10$ReadTnAiY60/dutljhQFru.XRGDH7Weiskf0BgGWgPC6jwy6.UZcS',NULL,1),(85,NULL,'$2y$10$zu1/kMl65D6i4l6Fm.bn3.CmaPRmwbd/uIMbZwQQItdEI2UQ9MwAm',NULL,1),(86,NULL,'$2y$10$PAkqQR.8URVYlyxRDPsI0eyxb79qzmyFQCZ37HKWwlbYREKyytlza',NULL,1),(87,NULL,'$2y$10$bgJC1/j/zLkQttDkGuFvwuEjuXqBayHd7a6.UNc.rHk5Ymq8VCvh2',NULL,1),(88,NULL,'$2y$10$17LdgHDykcyP1YE1NyWKiO6gN5F6pfJqzhb70/.hBPmef3JQ6kedm',NULL,1),(89,NULL,'$2y$10$eXzZR4iUhvJ0mcfTjcu.N.3vQKF8cEOYbwMI1J3Rsi2dbAWIF13mO',NULL,1),(90,NULL,'$2y$10$xQeqSOhMjM1Maek7rWAeD./EvqBvGgFv6q483A1Gr1T.AFdcNMuLy',NULL,1),(91,NULL,'$2y$10$VXqMWf1ApIutvRnuejov7.V44mec7RmF0pxv7jPV1.Fcozf35GIoq',NULL,1),(92,NULL,'$2y$10$i1sRxqJmwprOsdx9SYSdI.CeH4bqIjq5m1rINdu87TQRYl6JiTHtK',NULL,1),(93,NULL,'$2y$10$mhfY7vvo2FWFjhxXdigl8OBCBlM13VgAFZpDDt8g1S9KxOfZuaiY2',NULL,1),(94,NULL,'$2y$10$T1tRqUx6dBkzb9mJO0ECSendD4Pe6oxDR8VDJ9WThLZl1yRa1UHvu',NULL,1),(95,NULL,'$2y$10$mrQ4dFR7wt8xvHDsBDkr0u5ocdN0e1Ta55bfZMLQupTKx0XMDecx.',NULL,1),(96,NULL,'$2y$10$wIheaPgKMua0PF/rt5rpCe45r7dvBImZJO090WCKe28BTTUaYZGAa',NULL,1),(97,NULL,'$2y$10$K77LtdOlc4XgM.PDAgQwCOU4Sq29Y3zq7P2Qsj1930MY8TR1JcT6G',NULL,1),(98,NULL,'$2y$10$FLFcbqugX.9eH4yxpRNcZugYCvpTduair1ZKkYNxAMFV0ps6OYX.i',NULL,1),(99,NULL,'$2y$10$vg/rqtO5h92XYjue3AbS/.PIKnRPqiPfQ8PXtnI0LI.9D7qB7k4fi',NULL,1),(100,NULL,'$2y$10$2RkHSGP5i8BuHLtqpiEYJupO/EqtyHhz.wfbE6a1GfDP0rnMBRgm2',NULL,1),(101,NULL,'$2y$10$lum0OdgTFjORN6u.CIvBcOXyZirkDSUeVb3Q2CIVJjFouRAws4nVG',NULL,1),(102,NULL,'$2y$10$vuBm54jGC0QT4cJqL3/e9OhiI7gCQYyYxR0KkqG6LwJP0NNrjWYje',NULL,1),(103,NULL,'$2y$10$Pb9o7fPKCeoua8y1zlX5FuOAkj7eXdusixywsFeS84v7J/gHznfcW',NULL,1),(104,NULL,'$2y$10$k4XQRDlz/jkOmOEt5bAaveOW2NPyd4f0KFTz0A.IbORCNyllRw/ca',NULL,1),(105,NULL,'$2y$10$wiQja4RBkQWrrceJjvOcxuEF9iwOtT3GlEVlsLvtsBNhRNyMDHLM.',NULL,1),(106,NULL,'$2y$10$Ria.vWszBAbTYp07nNIxEeobDLhTc2tiuiRiGPlhtl0r5TJWh6Gg6',NULL,1),(107,NULL,'$2y$10$V6O4pi1j1I8OfUHP3Brr/O1TuUGXSor3Sw2XxXHZAdpegtGnPl8X2',NULL,1),(108,NULL,'$2y$10$.UrpeexJO0LEdsnKwI7AoutTrbUV1Ke6TdaPJLnBZ6UbjwERInFPq',NULL,1),(109,NULL,'$2y$10$PfeZ2qmeBuUJ5ht.9YXofeTQGsOP3nV4/7BXkM2k2uxAKyZ9ktywm',NULL,1),(110,NULL,'$2y$10$bPMMVUFI4E/3K5.O/e3lNeal3YB2sY7IQFbnLUuukBkcoERPpWXVC',NULL,1),(111,NULL,'$2y$10$Bl5B4AQAHcibgJPQvjoh7uTZsuIWKDPj1p8ZCI.8FQqq1oTX1hsDe',NULL,1),(112,NULL,'$2y$10$Hh3iiyW5a31r91aVArAiC.jO6/VpAwHJCkOXVbSpGpMyDD8kDXvyO',NULL,1),(113,NULL,'$2y$10$4zlxieTVeb6NT8JUE4dgrOFjInmR3NdaZ4VElWOXYkQybgQ/enMQa',NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-29 10:53:51
