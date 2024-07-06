<?php
require_once('../backend/config/connect.php');
session_start();
if (!isset($_SESSION['admin'])) {
    header("Location: index.php");
    exit;
}

function fetchCommands($conn) {
    $sql = 'SELECT commander.commander_id, commander.user_id, commander.service_id, user_name, service_name, service_img, service_price, date, service_details 
            FROM commander 
            INNER JOIN user USING(user_id) 
            INNER JOIN service USING(service_id)';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function deleteCommand($conn, $commander_id) {
    $query = 'DELETE FROM `commander` WHERE commander_id = :commander_id';
    $statement = $conn->prepare($query);
    $statement->bindParam(':commander_id', $commander_id, PDO::PARAM_INT);
    return $statement->execute();
}

if (isset($_POST['delete_command']) && isset($_POST['commander_id'])) {
    if (deleteCommand($conn, $_POST['commander_id'])) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
    exit;
}

$commands = fetchCommands($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style/commands.page.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <title>Dashboard</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="adminNav.js" defer></script>
    <script src="script/commands.page.js" defer></script>
</head>
<body>
    <div id="allNavBar"></div>
    <div class="mainPage">
        <header>
            <h1>LOGO</h1>
            <i class="fa fa-bars" id="iconNavBar" aria-hidden="true"></i>
        </header>
        <main>
            <?php foreach ($commands as $command) : ?>
                <?php 
                $service_options = json_decode($command['service_details']); 
                ?>
                <div class="command" data-commander-id="<?= htmlspecialchars($command['commander_id']) ?>">
                    <div class="command-body">
                        <img src="../frontend/images/icon-16.png" alt="" srcset="">
                        <div class="command-header">
                            <div>
                                <p class="title"><?= htmlspecialchars($command['service_name']) ?></p>
                                <p class="price"><?= htmlspecialchars($command['service_price']) ?>DH</p>
                                <p class="date"><?= htmlspecialchars($command['date']) ?></p>
                            </div>
                            <p class="options">
                                <?php
                                if (!empty($service_options->primary_options)) {
                                    echo implode(',', $service_options->primary_options) . ' | ';
                                }
                                
                                if (!empty($service_options->secondary_options)) {
                                    foreach ($service_options->secondary_options as $key => $value) {
                                        echo "$key: $value | ";
                                    }
                                }
                                
                                if (!empty($service_options->last_options)) {
                                    foreach ($service_options->last_options as $nested_key => $nested_value) {
                                        echo "$nested_key: ";
                                        foreach ($nested_value as $nested_subkey => $nested_subvalue) {
                                            echo "$nested_subkey=$nested_subvalue ";
                                        }
                                    }
                                }
                                ?>
                            </p>
                        </div>
                        <button class="delete-command"><i class="fa fa-trash"></i> Delete</button>
                    </div>
                </div>
            <?php endforeach ?>
        </main>
    </div>
    <script>
    $(document).ready(function() {
        $('.delete-command').on('click', function() {
            var $command = $(this).closest('.command');
            var commander_id = $command.data('commander-id');

            $.ajax({
                type: 'POST',
                url: '',
                data: {
                    delete_command: true,
                    commander_id: commander_id
                },
                success: function(response) {
                    var result = JSON.parse(response);
                    if (result.status === 'success') {
                        $command.remove();
                    } else {
                        alert('Error deleting command.');
                    }
                }
            });
        });
    });
    </script>
</body>
</html>
