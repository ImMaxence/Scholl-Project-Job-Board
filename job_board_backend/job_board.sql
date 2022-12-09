-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 11, 2022 at 01:04 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_board`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL,
  `title` varchar(250) NOT NULL,
  `createdDate` date NOT NULL,
  `location` varchar(250) NOT NULL,
  `salarie` float NOT NULL,
  `type` varchar(250) NOT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isRemote` tinyint(1) NOT NULL,
  `qualificationRequired` varchar(250) NOT NULL,
  `description` varchar(2500) NOT NULL,
  `companieId` int(11) NOT NULL,
  `pictureDataAdvertisement` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`id`, `title`, `createdDate`, `location`, `salarie`, `type`, `isActive`, `isRemote`, `qualificationRequired`, `description`, `companieId`, `pictureDataAdvertisement`) VALUES
(4, 'Expert Cyber-Sécurité', '2022-10-09', 'Marseille', 3612, 'CDI', 1, 0, 'BAC +5 Réseau', 'Nous recherchons un expret en Cyber-Sécurité pour assurer ', 13, ''),
(5, 'Architecte application', '2022-10-11', 'Aix', 4500, 'CDD', 1, 1, 'BAC +5 Informatique', 'Nous recherchons un developpeur logiciel', 12, ''),
(6, 'Architecte application', '2022-09-01', 'Aubagne', 4500, 'Alternance', 0, 0, 'BAC +5 Informatique', 'Nous recherchons un developpeur logiciel', 12, ''),
(7, 'Fleuriste', '2022-10-10', 'Marseille', 1536, 'CDI', 1, 0, 'Aucunes', 'Nous recherchons un fleuriste', 9, ''),
(8, 'Maçon', '2022-10-10', 'Aubagne', 1535, 'CDD', 1, 0, 'CAP', 'Nous recherchons un maçon', 11, '');

-- --------------------------------------------------------

--
-- Table structure for table `companie`
--

CREATE TABLE `companie` (
  `id` int(11) NOT NULL,
  `email` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `pictureDataCompanie` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companie`
--

INSERT INTO `companie` (`id`, `email`, `username`, `password`, `pictureDataCompanie`) VALUES
(9, 'Stephanie.Roygniak@free.fr', 'Contact-Free', 'FreeCBi1', ''),
(11, 'jeb.johnson@orange.fr', 'Contact-Orange', 'OrangeCMieux', ''),
(12, 'laurent.lerich@cic.fr', 'Contact-Cic', 'Beaucoup2$', ''),
(13, 'mark.zuckerberg@facebook.fr', 'Contact-Facebook', 'SuperSécurisé132', '');

-- --------------------------------------------------------

--
-- Table structure for table `jobapplication`
--

CREATE TABLE `jobapplication` (
  `id` int(11) NOT NULL,
  `advertisementId` int(11) NOT NULL,
  `peopleId` int(11) NOT NULL,
  `createdDate` date NOT NULL,
  `motivationLetter` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobapplication`
--

INSERT INTO `jobapplication` (`id`, `advertisementId`, `peopleId`, `createdDate`, `motivationLetter`) VALUES
(6, 7, 14, '2022-10-11', 'I am ready to work with you. I\'m glad to join your team. I expect i can help you to improve your companie.'),
(7, 8, 11, '2022-10-10', 'I\'m ready to join your companie, i\'m very tlo '),
(8, 8, 11, '2022-10-10', 'I\'m ready to join your companie, i\'m very happy to join your companie'),
(11, 6, 11, '2022-10-10', 'I\'m ready to join your companie, i\'m very happy to join your companie');

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` int(11) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `birthDate` date NOT NULL,
  `email` varchar(250) NOT NULL,
  `username` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `pictureDataPeople` blob
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `lastname`, `firstname`, `birthDate`, `email`, `username`, `password`, `isAdmin`, `pictureDataPeople`) VALUES
(10, 'Laporte', 'Maxence', '2002-08-07', 'maxence.laporte@epitech.eu', 'TheMaxquent', 'motdepasse123', 0, ''),
(11, 'Bonnici', 'Maxence', '2002-07-17', 'maxence.bonnici@epitech.eu', 'xXDarknoob69Xx', 'azert123', 0, ''),
(12, 'Lozanno', 'Antoine', '1981-11-19', 'antoine.lozanno@gmail.com', 'Le_Vrai_Antoine', '12Antoine34', 0, ''),
(13, 'Bernard', 'Bernadeth', '1954-04-07', 'bernadeth.bernard@yahoo.com', 'Bernadeth13', 'BBLove_du13', 0, ''),
(14, 'Pelloux', 'Adam', '2015-11-18', 'adam.pelloux@laposte.net', 'Akhan', 'LesSangliers5', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_companieId` (`companieId`);

--
-- Indexes for table `companie`
--
ALTER TABLE `companie`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `jobapplication`
--
ALTER TABLE `jobapplication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_advertisementId` (`advertisementId`),
  ADD KEY `fk_peopleId` (`peopleId`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `advertisement`
--
ALTER TABLE `advertisement`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `companie`
--
ALTER TABLE `companie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `jobapplication`
--
ALTER TABLE `jobapplication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `fk_companieId` FOREIGN KEY (`companieId`) REFERENCES `companie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jobapplication`
--
ALTER TABLE `jobapplication`
  ADD CONSTRAINT `fk_advertisementId` FOREIGN KEY (`advertisementId`) REFERENCES `advertisement` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_peopleId` FOREIGN KEY (`peopleId`) REFERENCES `people` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
