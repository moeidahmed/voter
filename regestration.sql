-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 12, 2022 at 01:41 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `regestration`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_data`
--

DROP TABLE IF EXISTS `user_data`;
CREATE TABLE IF NOT EXISTS `user_data` (
  `name` text NOT NULL,
  `fatherName` text NOT NULL,
  `cnic` varchar(255) NOT NULL,
  `dob` varchar(50) NOT NULL,
  `contact` varchar(250) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `province` text NOT NULL,
  `district` varchar(100) NOT NULL,
  `uc` varchar(100) NOT NULL,
  `ward` varchar(100) NOT NULL,
  `gender` text NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_data`
--

INSERT INTO `user_data` (`name`, `fatherName`, `cnic`, `dob`, `contact`, `address`, `city`, `province`, `district`, `uc`, `ward`, `gender`, `email`) VALUES
('Moeid Ahmed', 'Naeem Ahmed Sheikh', '3521017980273', '07/12/1998', '03244798500', 'House no 16, Street no 29 mainbazar dharampura lahore', 'Lahore', 'Punjab', 'Lahore', '186', '2', 'male', 'moeid071298@gmail.com'),
('Muhammad Altaf', 'Altaf Ahmed', '3520117980273', '07/04/1974', '032423798500', 'Bahria Town', 'Karachi', 'Sindh', 'Karachi Central', '158', '5', 'male', 'altaf071298@gmail.com'),
('Zara Noor', 'Noor Ahmed', '542173218312684', '12/05/2022', '0342131242141', '29 swat street', 'Peshawar', 'Kpk', 'Peshawar', '215', '5', 'female', 'zaranoor705@gmail.com'),
('John ', 'Andrew', '342651351313', '07/07/2005', '033324324321', 'House no 16, Street no 29 ', 'Quetta', 'Balochistan', 'Quetta', '198', '2', 'other', 'john@gmail.com'),
('Habiba Akram', 'Abu Bakr', '421432632123', '12/05/2022', '03430132131', 'Larex Colony', 'Pishin Valley', 'Gilgit', 'Bhimber', '25', '5', 'female', 'hb@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
