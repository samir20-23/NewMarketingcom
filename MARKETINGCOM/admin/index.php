<?php
require_once('../backend/config/connect.php');
session_start();
$error = '';

if (isset($_SESSION['admin'])) {
    navigateToAdminPage();
}

if (isset($_POST['admin_login'])) {
    $sql = 'SELECT * FROM `admin` WHERE `email`= "'.$_POST['email'].'"';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC)[0];
    if (empty($result)) {
        $error = 'Invalid Data';
    }elseif($result['password'] === $_POST['password']){
        echo'<script>sessionStorage.setItem("admin", "true");</script>';
        $_SESSION['admin'] = 'true';
        navigateToAdminPage();
    }
    
}

function navigateToAdminPage(){
    header("Location: adminPage.html");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/index.page.css">
    <title>Login</title>
</head>

<body>
    <div class="wrapper">
        <form class="form-signin" method="POST">
            <h2 class="form-signin-heading">Please login</h2>
            <input type="text" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
            <input type="password" class="form-control" name="password" placeholder="Password" required="" /><br>
            <p><?=$error?></p>
            <input class="" name="admin_login" type="submit">
        </form>
    </div>
</body>

</html>