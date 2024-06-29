-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2024 at 02:48 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `marketingcom`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` decimal(2,0) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `email`, `password`) VALUES
(1, 'souklabi@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `commander`
--

CREATE TABLE `commander` (
  `user_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `service_details` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commander`
--

INSERT INTO `commander` (`user_id`, `service_id`, `date`, `service_details`) VALUES
(21, 16, '2024-06-28 09:39:56', '{primary_options:[man, woman, kid],second_option:attack helicopter2,last_option:russian tank}'),
(21, 16, '2024-06-28 09:57:14', '{primary_options:[man, woman, kid],second_option:attack helicopter2,last_option:russian tank}'),
(21, 20, '2024-06-28 10:03:27', '{primary_options:[],second_option:,last_option:}'),
(21, 16, '2024-06-28 10:22:56', '{primary_options:[man],second_option:man2,last_option:man}'),
(21, 16, '2024-06-28 10:34:17', '{primary_options:[man, woman],second_option:russian tank2,last_option:nuclear missile}'),
(21, 16, '2024-06-28 10:48:01', '{primary_options:[man],second_option:man2,last_option:man}'),
(21, 16, '2024-06-28 13:03:40', '{primary_options:[kid],second_option:kid2,last_option:kid}');

-- --------------------------------------------------------

--
-- Table structure for table `relation`
--

CREATE TABLE `relation` (
  `service_id` int(11) NOT NULL,
  `ser_service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relation`
--

INSERT INTO `relation` (`service_id`, `ser_service_id`) VALUES
(1, 5),
(1, 6),
(2, 3),
(2, 4),
(7, 8),
(7, 9),
(10, 11),
(10, 12),
(10, 13),
(14, 15),
(14, 16),
(14, 19),
(19, 20),
(19, 21);

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(55) DEFAULT NULL,
  `service_img` varchar(100) DEFAULT NULL,
  `service_price` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`service_id`, `service_name`, `service_img`, `service_price`) VALUES
(1, 'Video/Animation', 'images/icon-4.png', NULL),
(2, 'Audio', 'images/icon-2.png', NULL),
(3, 'Voice-Over', 'images/icon-10.png', 500),
(4, 'Audio Review', 'images/icon-11.png', 270),
(5, 'Video', 'images/icon-54.png', 200),
(6, 'Animation', 'images/icon-55.png', 250),
(7, 'Graphics Design', 'images/icon-3.png', NULL),
(8, '2D Design', 'images/icon-53.png', 202),
(9, '3D Design', 'images/icon-56.png', 332),
(10, 'Adverting', 'images/icon-5.png\r\n', NULL),
(11, 'SM marketing', 'images/icon-14.png', 200),
(12, 'SEO', 'images/icon-15.png', 500),
(13, 'Mailing', 'images/icon-16.png', 299),
(14, 'Dev', 'images/icon-6.png', NULL),
(15, 'Api', 'images/icon-22.png', 100),
(16, 'Script', 'images/icon-90.png', 200),
(19, 'Mobile App', 'images/icon-24.png', NULL),
(20, 'Android App Dev', 'images/icon-37.png', 222),
(21, 'IOS App Dev', 'images/icon-38.png', 222),
(26, 'Packs', 'images/icon-52.png', NULL),
(27, 'Printing label', 'images/icon-1.png', NULL),
(28, 'S.M Management', 'images/icon-7.png', NULL),
(29, 'Photography', 'images/icon-8.png', NULL),
(30, 'Consulting', 'images/IMG_667f30b5c9876.png', NULL),
(33, 'Solde', 'images/icon-60.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `service_options`
--

CREATE TABLE `service_options` (
  `option_id` int(11) NOT NULL,
  `primary_options` varchar(600) NOT NULL,
  `secondary_options` varchar(600) NOT NULL,
  `last_options` varchar(600) NOT NULL,
  `service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_options`
--

INSERT INTO `service_options` (`option_id`, `primary_options`, `secondary_options`, `last_options`, `service_id`) VALUES
(1, 'man,woman,kid,attack helicopter,russian tank,nuclear missile', 'man2,woman2,kid2,attack helicopter2,russian tank2,nuclear missile2', 'man,woman,kid,attack helicopter,russian tank,nuclear missile', 4),
(2, 'man,woman,kid,attack helicopter,russian tank,nuclear missile', 'man2,woman2,kid2,attack helicopter2,russian tank2,nuclear missile2', 'man,woman,kid,attack helicopter,russian tank,nuclear missile', 16);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(80) DEFAULT NULL,
  `user_phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_phone`) VALUES
(1, 'ayoub', '0696179900'),
(2, ' samir', '234234234234234'),
(3, ' samir', '555555555555'),
(4, ' samir', '111111111'),
(5, ' samir', '44444444444'),
(6, ' samir', '677654455665'),
(7, ' samir', '34433443454'),
(8, ' samir', '566643443333'),
(9, ' samir', '67667767675'),
(10, ' samir', '23423454454545'),
(11, ' samir', '0696179900444'),
(12, ' samir', '356554465454'),
(13, ' samir', '0618087106'),
(14, ' Abderrafie', '0662407763'),
(15, ' obaid ', '01020102055487'),
(16, ' Abderrafie', '2342342345'),
(17, ' gghhgghh', '3453345345'),
(18, ' samir', '2342342342'),
(19, ' Wafae Elmrabet', '0662354466'),
(20, ' Wafae Elmrabet', '2342342344'),
(21, ' obaid ', '066235446633');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `relation`
--
ALTER TABLE `relation`
  ADD PRIMARY KEY (`service_id`,`ser_service_id`),
  ADD KEY `fk_relation_relation_service` (`ser_service_id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `service_options`
--
ALTER TABLE `service_options`
  ADD PRIMARY KEY (`option_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `service_options`
--
ALTER TABLE `service_options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `relation`
--
ALTER TABLE `relation`
  ADD CONSTRAINT `fk_relation_relation2_service` FOREIGN KEY (`service_id`) REFERENCES `service` (`service_id`),
  ADD CONSTRAINT `fk_relation_relation_service` FOREIGN KEY (`ser_service_id`) REFERENCES `service` (`service_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;