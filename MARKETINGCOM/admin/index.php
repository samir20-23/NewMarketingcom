<?php
require_once('../backend/config/connect.php');
session_start();
$error = '';

 
$rateLimit = 0; 
$timeFrame = 1;  
$blockTime = 300;  
 
$userIp = $_SERVER['REMOTE_ADDR'];
$sessionKey = "rate_limit_$userIp";
$blockKey = "block_$userIp";
 
if (isset($_SESSION[$blockKey]) && $_SESSION[$blockKey] > time()) {
    $remainingTime = $_SESSION[$blockKey] - time();
    $error = "تم حظرك لمدة 5 دقائق. يرجى المحاولة لاحقًا. الرجاء الانتظار";
} else {
   
    if (!isset($_SESSION[$sessionKey])) {
        $_SESSION[$sessionKey] = ['count' => 1, 'start_time' => time()];
    } else {
        $elapsedTime = time() - $_SESSION[$sessionKey]['start_time'];
        
        if ($elapsedTime < $timeFrame) {
            $_SESSION[$sessionKey]['count']++;
            if ($_SESSION[$sessionKey]['count'] > $rateLimit) {
                $_SESSION[$blockKey] = time() + $blockTime;
                $error = "تم حظرك لمدة 5 دقائق. يرجى المحاولة لاحقًا.";
            }
        } else {
            $_SESSION[$sessionKey] = ['count' => 1, 'start_time' => time()];
        }
    }
}
 
if (empty($error) && isset($_POST['admin_login'])) {
    $sql = 'SELECT * FROM `admin` WHERE `email`= "'.$_POST['email'].'"';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (empty($result)) {
        $error = 'Invalid Data';
    } else {
        $admin = $result[0];
        if ($admin['password'] === $_POST['password']) {
            $_SESSION['admin'] = true;
            navigateToAdminPage();
        } else {
            $error = 'Invalid Password';
        }
    }
}

function navigateToAdminPage(){
    header("Location: adminPage.html");
    exit();
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
            <input type="text" class="form-control" name="email" placeholder="Email Address" required autofocus />
            <input type="password" class="form-control" name="password" placeholder="Password" required /><br>
            <p><?=$error?></p>
            <input class="" name="admin_login" type="submit">
        </form>
    </div>
</body>
</html>
