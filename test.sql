-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2019 at 08:12 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `username` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `blood group` varchar(5) NOT NULL,
  `password` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `degree` varchar(50) NOT NULL,
  `dob` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`username`, `name`, `email`, `blood group`, `password`, `gender`, `degree`, `dob`) VALUES
(1, 'Zidan Mehdi', 'mkzzidan786@gmail.com', '', '1234', 'on', '', '29-6-1998'),
(2, 'Adnan Khandakar', 'adnan@gmail.com', '', 'aaaa', 'undefined', '', '1-6-1998'),
(2, 'Adnan Khandakar', 'adnan@gmail.com', '', 'aaaa', 'undefined', '', '1-6-1998'),
(3, 'Maliha Ayesha', 'maliha@gmail.com', '', 'qqqq', 'undefined', '', '23-9-1997'),
(4, 'Tanzin Islam', 'tanzin@gmail.com', '', 'zzzz', 'Male', '', '9-12-1996'),
(5, 'Sameul Islam', 'sameul@gmail.com', '', 'ssss', 'Male', '', '21-05-1997'),
(6, 'Mehedi Misson', 'misson@gmail.com', '', 'mmmm', 'Male', '', '1-1-1997'),
(7, 'Hridoy Nakibul', 'nakibul@gmail.com', '', 'nnnn', 'Male', 'SSC\nH', '1-1-1998'),
(8, 'Arifur Rafi', 'rafi@gmail.com', 'SSC\nH', 'rrrr', 'Male', 'SSC\nHSC\nBSc\n', '1-5-1996'),
(9, 'Ryhan Ahmed', 'rayhan@gmail.com', 'B ', 'aaaa', 'Male', 'SSC\nHSC\nBSc\n', '7-7-1997');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
