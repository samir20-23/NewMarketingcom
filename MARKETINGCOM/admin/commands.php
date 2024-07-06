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
    <style>
        .options {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .option-group {
            margin-bottom: 10px;
        }

        .option-title {
            font-weight: bold;
            margin-right: 5px;
        }

        .option-items {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }

        .option-item {
            background-color: #f0f0f0;
            padding: 3px 8px;
            border-radius: 5px;
        }
    </style>
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
                // Ensure service_details is not null and decode it
                if (!empty($command['service_details'])) {
                    $service_options = json_decode($command['service_details'], true); 
                } else {
                    $service_options = [];
                }

                // Fetch service_img based on service_id
                $service_id = $command['service_id'];
                $stmt = $conn->prepare('SELECT service_img FROM service WHERE service_id = :service_id');
                $stmt->bindParam(':service_id', $service_id, PDO::PARAM_INT);
                $stmt->execute();
                $result = $stmt->fetch(PDO::FETCH_ASSOC);
                $service_img = isset($result['service_img']) ? $result['service_img'] : '';
                ?>
                <div class="command" data-commander-id="<?= htmlspecialchars($command['commander_id']) ?>">
                    <div class="command-body">
                        <?php if (!empty($service_img)) : ?>
                            <img src="../frontend/<?= htmlspecialchars($service_img) ?>" alt="Service Image" srcset="">
                        <?php else : ?>
                            <img src="../frontend/images/icon-16.png" alt="Default Image" srcset="">
                        <?php endif; ?>
                        <div class="command-header">
                            <div>
                                <p class="title"><?= htmlspecialchars($command['service_name']) ?></p>
                                <p class="price"><?= htmlspecialchars($command['service_price']) ?>DH</p>
                                <p class="date"><?= htmlspecialchars($command['date']) ?></p>
                            </div>
                            <div class="options">
                                <?php foreach ($service_options as $key => $value) : ?>
                                    <div class="option-group">
                                        <span class="option-title"><?= htmlspecialchars($key) ?>:</span>
                                        <div class="option-items">
                                            <?php 
                                            if (is_array($value)) {
                                                foreach ($value as $index => $item) {
                                                    echo '<span class="option-item">' . htmlspecialchars("$index=$item") . '</span>';
                                                }
                                            } else {
                                                echo '<span class="option-item">' . htmlspecialchars($value) . '</span>';
                                            }
                                            ?>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>
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

            // Ask for confirmation
            if (confirm('Are you sure you want to delete this command?')) {
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
            }
        });
    });
    </script>
</body>
</html>
