```markdown
### Setup Instructions for MarketingCom Project
 
### Step 0: Clone the Repository
```bash
git clone https://github.com/samir20-23/NewMarketingcom.git htdocs
```
### Step 1: switch to branch 'master'
```bash
git branch
git checkout master 
```
### Step 2: Start Apache and MySQL
- Open your XAMPP Control Panel.
- Start **Apache**.
- Start **MySQL**.

### Step 3: Create the Database
1. Open your browser and navigate to [phpMyAdmin](http://localhost/phpmyadmin).
2. Create a new database named **`marketingcom`**:
   ```sql
   CREATE DATABASE marketingcom;
   ```

### Step 4: Import Tables and Data
1. Select the **`marketingcom`** database in phpMyAdmin.
2. Open the **SQL** tab.
3. Paste the following SQL code and execute it:
   ```sql
   -- phpMyAdmin SQL Dump
   -- version 5.2.1
   -- https://www.phpmyadmin.net/
   -- Server version: 10.4.32-MariaDB
   -- PHP Version: 8.2.12

   SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
   START TRANSACTION;
   SET time_zone = "+00:00";

   -- Table structure and data for `admin`
   CREATE TABLE `admin` (
     `admin_id` decimal(2,0) NOT NULL,
     `email` varchar(255) DEFAULT NULL,
     `password` varchar(256) DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

   INSERT INTO `admin` (`admin_id`, `email`, `password`) VALUES
   (1, 'souklabi@gmail.com', '123456');

   -- Table structure and data for `commander`
   CREATE TABLE `commander` (
     `user_id` int(11) NOT NULL,
     `service_id` int(11) NOT NULL,
     `date` datetime NOT NULL,
     `service_details` varchar(600) NOT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

   INSERT INTO `commander` (`user_id`, `service_id`, `date`, `service_details`) VALUES
   (3, 4, '2024-06-26 19:03:21', ''),
   (1, 3, '2024-06-26 19:29:36', '');

   -- Add more tables and data as needed
   ```

### Step 5: Access the Application
1. Open your browser.
2. Navigate to [http://localhost/NewMarketingcom](http://localhost/NewMarketingcom).

---

### Additional Recommendations
- **Change Default Admin Credentials**: Update the default admin email and password for security.
- **Check PHP Version**: Ensure your server is running PHP version **8.2.12** or higher.
- **Database Backup**: Create regular backups of your database after importing the initial data.

Enjoy coding! 🚀
```