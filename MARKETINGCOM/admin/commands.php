<?php
require_once('../backend/config/connect.php');
$sql = 'SELECT commander.user_id, commander.service_id, user_name, service_name, service_img, service_price ,date , service_details FROM commander INNER JOIN user USING(user_id) INNER JOIN service USING(service_id) ';
$stmt = $conn->prepare($sql);
$stmt->execute();
$commands = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (isset($_POST['delete_command'])) {
    $query = 'DELETE FROM `commander` WHERE user_id = :user_id AND serviec_id = :service_id';
    $statment = $conn->prepare($query);
    $statment->bindParam('user_id', $_POST['user_id']);
    $statment->bindParam('serviec_id', $_POST['service_id']);
    $statment->execute();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/commands.page.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <title>Dashboard</title>
</head>

<body>
    <header>
        <h1>LOGO</h1>
        <i class="fa fa-bars" id="iconNavBar" aria-hidden="true"></i>
    </header>

    <main>
        <?php foreach ($commands as $command) {
            //     echo "<form action='' method='post'>

            //     <p>commanded ".$command['service_name']." by ".$command['user_name']."</p>
            //     <input type='submit' name='delete_command' value='Delete'>
            //     </form>";
        }
        ?>

        <div>
            <div>
                <div>
                    <img src="../frontend/images/icon-16.png" alt="" srcset="">
                    <p>Voice Over</p>
                </div>

            </div>


        </div>
    </main>
</body>

</html>