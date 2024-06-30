<?php
require_once('../backend/config/connect.php');
$sql = 'SELECT commander.user_id, commander.service_id, user_name, service_name, service_img, service_price ,date , service_details FROM commander INNER JOIN user USING(user_id) INNER JOIN service USING(service_id) ';
$stmt = $conn->prepare($sql);
$stmt->execute();
$commands = $stmt->fetchAll(PDO::FETCH_ASSOC);

if (isset($_POST['delete_command'])) {
    $query = 'DELETE FROM `commander` WHERE user_id = '.$_POST['user_id'].' AND service_id = '.$_POST['service_id'].' AND date = "'.$_POST['date'].'" ';
    $statment = $conn->prepare($query);
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
        <?php foreach ($commands as $command):?>
            <?php $service_options = json_decode($command['service_details'])?>
        <div class="command">
            <div class="command-body" >
                <img src="../frontend/images/icon-16.png" alt="" srcset="">
                <div class="command-header" >
                    <div>
                        <p class="title" ><?=$command['service_name']?></p>
                        <p class="price"><?=$command['service_price']?>DH</p>
                        <p class="date"><?=$command['date']?></p>
                    </div>
                    <p class="options" ><?=sizeof($service_options->primary_options)>0?implode(',',$service_options->primary_options).' | ':''?> <?=$service_options->second_option.' | '?> <?=$service_options->last_option?></p>
                </div>
                <form class="command-end" method="POST" action="" >
                    <input type="text" name="service_id" value="<?=$command['service_id']?>" hidden>
                    <input type="text" name="user_id" value="<?=$command['user_id']?>" hidden>
                    <input type="text" name="date" value="<?=$command['date']?>" hidden>
                    <label>
                        <i class="fa fa-trash" ></i>
                        <input type="submit" name="delete_command" hidden>
                    </label>
                </form>
            </div>
        </div>
        <?php endforeach?>
    </main>
</body>

</html>