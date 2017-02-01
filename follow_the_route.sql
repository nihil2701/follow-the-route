-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2016 at 11:08 AM
-- Server version: 10.1.9-MariaDB
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `follow_the_route`
--

-- --------------------------------------------------------

--
-- Table structure for table `hello`
--

CREATE TABLE `hello` (
  `tk_emailid` varchar(50) NOT NULL,
  `tk_patients_saved` int(10) NOT NULL,
  `tk_time` int(10) NOT NULL,
  `tk_health` int(5) NOT NULL,
  `megapoints` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hello`
--

INSERT INTO `hello` (`tk_emailid`, `tk_patients_saved`, `tk_time`, `tk_health`, `megapoints`) VALUES
('akhil', 1, 0, 0, 0),
('amey', 8, 0, 0, 0),
('anu', 3, 0, 0, 0),
('manish', 2, 45, 100, 0),
('priyanka', 0, 12, 0, 0),
('ron', 5, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `leaderboard`
--

CREATE TABLE `leaderboard` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_total_score` int(4) NOT NULL,
  `tek_total_time` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leaderboard`
--

INSERT INTO `leaderboard` (`tek_emailid`, `tek_total_score`, `tek_total_time`) VALUES
('pri', 990, 21),
('simmi', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `level1`
--

CREATE TABLE `level1` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_health` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_score` int(5) NOT NULL,
  `tek_played` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level1`
--

INSERT INTO `level1` (`tek_emailid`, `tek_patients_saved`, `tek_health`, `tek_time`, `tek_score`, `tek_played`) VALUES
('pri', 3, 100, 3, 30, 0);

-- --------------------------------------------------------

--
-- Table structure for table `level2`
--

CREATE TABLE `level2` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_health` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_score` int(5) NOT NULL,
  `tek_played` int(5) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level2`
--

INSERT INTO `level2` (`tek_emailid`, `tek_patients_saved`, `tek_health`, `tek_time`, `tek_score`, `tek_played`) VALUES
('pri', 5, 95, 2, 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `level3`
--

CREATE TABLE `level3` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_health` int(5) NOT NULL,
  `tek_score` int(11) NOT NULL,
  `tek_played` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level3`
--

INSERT INTO `level3` (`tek_emailid`, `tek_patients_saved`, `tek_time`, `tek_health`, `tek_score`, `tek_played`) VALUES
('pri', 0, 50, 100, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `level4`
--

CREATE TABLE `level4` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_health` int(5) NOT NULL,
  `tek_score` int(5) NOT NULL,
  `tek_played` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level4`
--

INSERT INTO `level4` (`tek_emailid`, `tek_patients_saved`, `tek_time`, `tek_health`, `tek_score`, `tek_played`) VALUES
('pri', 9, 7, 45, 360, 0);

-- --------------------------------------------------------

--
-- Table structure for table `level5`
--

CREATE TABLE `level5` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_health` int(5) NOT NULL,
  `tek_score` int(5) NOT NULL,
  `tek_played` int(3) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `level5`
--

INSERT INTO `level5` (`tek_emailid`, `tek_patients_saved`, `tek_time`, `tek_health`, `tek_score`, `tek_played`) VALUES
('pri', 10, 11, 50, 500, 0);

-- --------------------------------------------------------

--
-- Table structure for table `main`
--

CREATE TABLE `main` (
  `tek_emailid` varchar(50) NOT NULL,
  `tek_patients_saved` int(5) NOT NULL,
  `tek_time` int(5) NOT NULL,
  `tek_score` int(10) NOT NULL,
  `tek_current_level` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `main`
--

INSERT INTO `main` (`tek_emailid`, `tek_patients_saved`, `tek_time`, `tek_score`, `tek_current_level`) VALUES
('pri', 27, 21, 990, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hello`
--
ALTER TABLE `hello`
  ADD PRIMARY KEY (`tk_emailid`);

--
-- Indexes for table `leaderboard`
--
ALTER TABLE `leaderboard`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `level1`
--
ALTER TABLE `level1`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `level2`
--
ALTER TABLE `level2`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `level3`
--
ALTER TABLE `level3`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `level4`
--
ALTER TABLE `level4`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `level5`
--
ALTER TABLE `level5`
  ADD PRIMARY KEY (`tek_emailid`);

--
-- Indexes for table `main`
--
ALTER TABLE `main`
  ADD PRIMARY KEY (`tek_emailid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
