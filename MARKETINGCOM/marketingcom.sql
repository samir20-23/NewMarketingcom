-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2024 at 11:39 PM
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
(3, 4, '2024-06-26 19:03:21', ''),
(3, 4, '2024-06-26 19:03:29', ''),
(3, 4, '2024-06-26 19:03:35', ''),
(3, 4, '2024-06-26 19:04:19', ''),
(2, 3, '2024-06-26 19:05:46', ''),
(7, 3, '2024-06-26 19:06:17', ''),
(1, 3, '2024-06-26 19:06:36', ''),
(1, 3, '2024-06-26 19:06:37', ''),
(1, 3, '2024-06-26 19:06:37', ''),
(1, 3, '2024-06-26 19:06:37', ''),
(3, 3, '2024-06-26 19:12:36', ''),
(1, 3, '2024-06-26 19:17:35', ''),
(8, 3, '2024-06-26 19:18:27', ''),
(9, 3, '2024-06-26 19:20:10', ''),
(9, 3, '2024-06-26 19:20:14', ''),
(1, 3, '2024-06-26 19:24:50', ''),
(1, 3, '2024-06-26 19:24:51', ''),
(1, 3, '2024-06-26 19:24:52', ''),
(1, 3, '2024-06-26 19:24:52', ''),
(1, 3, '2024-06-26 19:24:54', ''),
(2, 3, '2024-06-26 19:27:00', ''),
(1, 3, '2024-06-26 19:29:26', ''),
(1, 3, '2024-06-26 19:29:28', ''),
(1, 3, '2024-06-26 19:29:36', ''),
(1, 3, '2024-06-26 19:29:36', ''),
(1, 3, '2024-06-26 19:29:36', ''),
(1, 3, '2024-06-26 19:29:36', ''),
(1, 3, '2024-06-26 19:29:45', ''),
(1, 3, '2024-06-26 19:29:55', ''),
(1, 3, '2024-06-26 19:30:48', ''),
(2, 3, '2024-06-26 19:32:40', ''),
(2, 3, '2024-06-26 19:32:50', ''),
(2, 3, '2024-06-26 19:32:51', ''),
(2, 3, '2024-06-26 19:32:53', ''),
(2, 3, '2024-06-26 19:33:55', ''),
(2, 3, '2024-06-26 19:33:56', ''),
(2, 3, '2024-06-26 19:33:57', ''),
(2, 3, '2024-06-26 19:33:57', ''),
(2, 3, '2024-06-26 19:33:57', ''),
(2, 3, '2024-06-26 19:35:40', ''),
(1, 3, '2024-06-26 19:35:47', ''),
(1, 3, '2024-06-26 19:36:35', ''),
(1, 3, '2024-06-26 19:36:36', ''),
(1, 3, '2024-06-26 19:36:36', ''),
(1, 3, '2024-06-26 19:36:46', ''),
(1, 3, '2024-06-26 19:36:53', ''),
(2, 4, '2024-06-26 19:37:35', ''),
(2, 4, '2024-06-26 19:38:56', ''),
(10, 4, '2024-06-26 19:40:21', ''),
(1, 4, '2024-06-26 19:43:27', ''),
(3, 4, '2024-06-26 19:47:22', ''),
(3, 4, '2024-06-26 19:47:23', ''),
(3, 4, '2024-06-26 19:47:24', ''),
(3, 4, '2024-06-26 19:47:24', ''),
(3, 4, '2024-06-26 19:47:24', ''),
(3, 4, '2024-06-26 19:47:25', ''),
(3, 4, '2024-06-26 19:47:25', ''),
(3, 4, '2024-06-26 19:47:25', ''),
(2, 4, '2024-06-26 19:47:46', ''),
(2, 4, '2024-06-26 19:47:46', ''),
(2, 4, '2024-06-26 19:47:46', ''),
(2, 4, '2024-06-26 19:47:47', ''),
(2, 4, '2024-06-26 19:47:47', ''),
(2, 4, '2024-06-26 19:47:47', ''),
(2, 4, '2024-06-26 19:47:47', ''),
(1, 4, '2024-06-26 19:48:55', ''),
(11, 4, '2024-06-26 19:48:58', ''),
(1, 4, '2024-06-26 19:49:58', ''),
(1, 4, '2024-06-26 19:50:33', ''),
(1, 4, '2024-06-26 19:50:52', ''),
(11, 4, '2024-06-26 19:51:11', ''),
(2, 4, '2024-06-26 19:52:01', ''),
(12, 4, '2024-06-26 19:52:34', ''),
(2, 4, '2024-06-26 20:01:25', ''),
(1, 4, '2024-06-26 20:09:28', ''),
(1, 4, '2024-06-26 20:17:01', ''),
(13, 4, '2024-06-26 20:21:31', ''),
(14, 4, '2024-06-26 20:24:15', ''),
(14, 4, '2024-06-26 20:24:34', ''),
(14, 4, '2024-06-26 20:25:12', ''),
(14, 3, '2024-06-26 20:25:35', ''),
(14, 4, '2024-06-26 20:26:40', ''),
(14, 4, '2024-06-26 20:26:45', ''),
(14, 4, '2024-06-26 20:29:21', ''),
(13, 3, '2024-06-26 20:35:54', ''),
(13, 3, '2024-06-26 20:35:55', ''),
(15, 4, '2024-06-26 16:13:17', ''),
(16, 3, '2024-06-27 11:48:23', ''),
(17, 12, '2024-06-27 12:28:46', ''),
(17, 12, '2024-06-27 12:35:00', ''),
(17, 12, '2024-06-27 12:35:05', ''),
(17, 12, '2024-06-27 12:35:11', ''),
(17, 12, '2024-06-27 12:35:17', ''),
(16, 12, '2024-06-27 12:48:55', ''),
(2, 12, '2024-06-27 12:51:00', ''),
(2, 21, '2024-06-27 14:22:28', ''),
(18, 21, '2024-06-27 14:23:56', ''),
(19, 16, '2024-06-27 12:50:21', ''),
(19, 16, '2024-06-27 12:51:50', ''),
(20, 16, '2024-06-27 14:01:55', ''),
(20, 16, '2024-06-27 14:02:17', ''),
(20, 16, '2024-06-27 14:31:42', ''),
(20, 16, '2024-06-27 14:38:16', '');

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
(21, 'IOS App Dev', 'images/icon-38.png', 222);

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
(20, ' Wafae Elmrabet', '2342342344');

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
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `service_options`
--
ALTER TABLE `service_options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
