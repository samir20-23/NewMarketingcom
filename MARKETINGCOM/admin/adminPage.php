<?php
$host = "localhost";
$database = "marketingcom";
$table = "service";
$usrname = "root";
$passcode = "";

$connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$select = $connection->query("SELECT service_name FROM $table");
$result = $select->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="style/adminPage.css">
    <link rel="stylesheet" href="../frontend/style/navBar.css">
    <title>Document</title>
</head>

<body>
    <!-- navBar element -->
    <div id="allNavBar"></div>
    <!-- navBar element -->
    <div class="mainPage">
        <header>
            <h1>LOGO</h1>
            <i class="fa fa-bars" id="iconNavBar" aria-hidden="true"></i>
        </header>
        <div class="content">
            <h1 class="title">Admin Dashboard ></h1>
            <div class="statsBox">
                <p>Total services</p>
                <h1 id="total_services"><?php echo count($result) ?></h1>
                <div class="btn">Manage services</div>
            </div>
        </div>
    </div>
    <!-- navBar js -->
    <script src="adminNav.js"></script>
</body>

</html>