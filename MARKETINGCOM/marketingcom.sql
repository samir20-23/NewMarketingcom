-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 05:16 AM
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
(98, 111),
(98, 112),
(99, 118),
(99, 120),
(99, 121),
(99, 122),
(100, 109),
(100, 110),
(101, 127),
(101, 128),
(102, 123),
(102, 124),
(103, 113),
(103, 114),
(103, 115),
(104, 129),
(104, 130),
(104, 131),
(104, 132),
(104, 133),
(104, 134),
(105, 116),
(105, 117),
(106, 125),
(106, 126),
(107, 156),
(107, 157),
(107, 158),
(107, 159),
(107, 160),
(107, 161),
(108, 154),
(108, 155),
(123, 164),
(123, 165),
(124, 162),
(124, 163),
(131, 135),
(131, 136),
(131, 137),
(131, 138),
(131, 139),
(131, 140),
(132, 141),
(132, 142),
(133, 151),
(133, 152),
(133, 153),
(134, 147),
(134, 148),
(134, 149),
(134, 150);

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
(98, 'Packs', 'images/icon.png', NULL),
(99, 'Printing Label', 'images/icon-1.png', NULL),
(100, 'Audio', 'images/icon-2.png', NULL),
(101, 'Graphics Design', 'images/icon-3.png', NULL),
(102, 'Video / Animation', 'images/icon-4.png', NULL),
(103, 'Adverting', 'images/icon-5.png', NULL),
(104, 'Dev', 'images/icon-6.png', NULL),
(105, 'S.M Management', 'images/icon-7.png', NULL),
(106, 'Photography', 'images/icon-8.png', NULL),
(107, 'Consulting', 'images/icon-9.png', NULL),
(108, 'Solde', 'images/icon-57.png', NULL),
(109, 'Voice Over', 'images/icon-10.png', 150),
(110, 'Audio Review', 'images/icon-11.png', 150),
(111, 'Pack 1', 'images/icon-12.png', 100),
(112, 'Pack 2', 'images/icon-13.png', 200),
(113, 'SM Marketing', 'images/icon-14.png', 100),
(114, 'SEO', 'images/icon-15.png', 150),
(115, 'Mailing', 'images/icon-16.png', 100),
(116, 'Content creating', 'images/icon-17.png', 200),
(117, 'Social media Manager', 'images/icon-18.png', 200),
(118, 'Packaging print', 'images/icon-33.png', 100),
(120, 'Stickers print', 'images/icon-34.png', 75),
(121, 'Mug prints', 'images/icon-35.png', 50),
(122, 'Clothing prints', 'images/icon-36.png', 100),
(123, 'Video', 'images/icon-54.png', NULL),
(124, 'Animation', 'images/icon-53.png', NULL),
(125, 'Photos', 'images/icon-19.png', 50),
(126, 'Videos', 'images/icon-20.png', 125),
(127, '2D Design', 'images/icon-56.png', 150),
(128, '3D Design', 'images/icon-55.png', 250),
(129, 'API', 'images/icon-22.png', 150),
(130, 'Scripts', 'images/icon-52.png', 200),
(131, 'Web App', 'images/icon-23.png', NULL),
(132, 'Mobile App', 'images/icon-24.png', NULL),
(133, 'UI & UX Design', 'images/icon-25.png', NULL),
(134, 'Chatbot', 'images/icon-26.png', NULL),
(135, 'Ecommerce Website', 'images/icon-32.png', 250),
(136, 'Buisness Website', 'images/icon-27.png', 300),
(137, 'Landing page', 'images/icon-28.png', 150),
(138, 'Portfolio', 'images/icon-31.png', 175),
(139, 'Drop shiping Website', 'images/icon-29.png', 250),
(140, 'Wordpress', 'images/icon-30.png', 150),
(141, 'Android App Dev', 'images/icon-37.png', 200),
(142, 'IOS App Dev', 'images/icon-38.png', 200),
(147, 'Facebook', 'images/icon-43.png', 125),
(148, 'Whatsapp', 'images/icon-46.png', 175),
(149, 'Instagram', 'images/icon-44.png', 150),
(150, 'TikTok', 'images/icon-45.png', 125),
(151, 'UI Design', 'images/icon-47.png', 150),
(152, 'UX Design', 'images/icon-49.png', 150),
(153, 'Both', 'images/icon-48.png', 300),
(154, 'Payoneer', 'images/icon-50.png', NULL),
(155, 'Wise', 'images/icon-51.png', NULL),
(156, 'Consulting', 'images/icon-21.png', 100),
(157, 'Consulting', 'images/icon-21.png', 100),
(158, 'Consulting', 'images/icon-21.png', 100),
(159, 'Consulting', 'images/icon-21.png', 100),
(160, 'Consulting', 'images/icon-21.png', 100),
(161, 'Consulting', 'images/icon-21.png', 100),
(162, '2D', 'images/icon-39.png', 150),
(163, '3D', 'images/icon-40.png', 250),
(164, 'Video Editing', 'images/icon-41.png', 125),
(165, 'Video Ads', 'images/icon-42.png', 100);

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
(11, 'Man,Woman', 'Moroccan,Middle Eastern,Egyptian,Original Arabic', 'Kid,Teenager,Adult,Old', 109);

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
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- AUTO_INCREMENT for table `service_options`
--
ALTER TABLE `service_options`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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