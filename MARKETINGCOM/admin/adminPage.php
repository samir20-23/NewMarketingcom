<?php
$host = "localhost";
$database = "marketingcom";
$table = "service";
$usrname = "root";
$passcode = "";

 
try {
    $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    $select = $connection->query("SELECT service_id, service_name  FROM $table WHERE service_price is NULL ");
    $fetchAll = $select->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($_POST as $key => $value) {
        if (strpos($key, 'delete_') === 0) {
            $service_id = str_replace('delete_', '', $key);
            try {
             
                $selectQuery = "SELECT service_img FROM $table WHERE service_id=:service_id";
                $select = $connection->prepare($selectQuery);
                $select->bindParam(":service_id", $service_id);
                $select->execute();
                $result = $select->fetch(PDO::FETCH_ASSOC);

                if ($result) {
                    $serviceImgPath = "../frontend/" . $result['service_img'];

                  
                    $deleteQuery = "DELETE FROM $table WHERE service_id=:service_id";
                    $delete = $connection->prepare($deleteQuery);
                    $delete->bindParam(":service_id", $service_id);
                    $delete->execute();

                   
                    if (file_exists($serviceImgPath)) {
                        unlink($serviceImgPath);
                    }

                  
                    header("Location: " . $_SERVER['PHP_SELF']);
                    exit();
                } else {
                    echo "Record not found.";
                }
            } catch (PDOException $e) {
                echo "Error deleting record: " . $e->getMessage();
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="style/adminPage.css">
    <link rel="stylesheet" href="../frontend/style/navBar.css">
    <title>Admin Dashboard</title>
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
            <h1 class="title" id="title">Admin Dashboard ></h1>
            <div class="statsBox">
                <p>Total services</p>
                <h1 id="total_services"><?php echo count($fetchAll) ?></h1>
                <button id="manage" class="btn">Manage services</button>
                <button id="add" class="btn">Add New Service</button>
                <hr id="hr">
                <div id="background">
                    <div id="delete-div">
                        <h1 id="remove">Remove Service</h1>
                        <p id="sure">Are You sure You want to Remove this Service ?</p><br>
                        <button class="remove">Remove</button><br><br>
                        <button id="closet"  class="cancel">Cancel</button>
                    </div>
                </div>
                <div id="croud">
                    <div id="allcrodtableselecte">
                        <table>
                            <tr>
                            </tr>
                            <?php if (!empty($fetchAll)) : ?>
                                <?php foreach ($fetchAll as $v) : ?>
                                    <tr>
                                        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                                            
                                            <td><a href="serServices.html?id=<?php echo $v['service_id'] ?>" name="service_name_<?php echo $v['service_id']; ?>"><?php echo $v['service_name']; ?></a></td>
                                            <td><a href="adminEdit.html?id=<?php echo $v['service_id'] ?>"  type="submit" name="edit" id="edit"  >edit</a></td>
                                            <td><input type="submit" id="delete" name="delete_<?php echo $v['service_id']; ?>" value="Delete"></td>
                                        </form>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </table>
                    </div>
                </div>
            </div>
            <div class="btn_div">
                <button id="back" class="btn">Back</button>
            </div>
        </div>
    </div>
    <!-- navBar js -->
    <script src="adminNav.js"></script>
</body>

</html>
