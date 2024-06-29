<?php
$host = "localhost";
$database = "marketingcom";
$table = "service";
$usrname = "root";
$passcode = "";

// Establish database connection
try {
    $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch service names
    $select = $connection->query("SELECT service_id, service_name FROM $table");
    $fetchAll = $select->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

// Handle Delete Actions
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    foreach ($fetchAll as $v) {
        $service_id = $v['service_id'];

        // Delete Form Submission Handling
        if (isset($_POST["delete_$service_id"])) {
            try {
                $deleteQuery = "DELETE FROM $table WHERE service_id=:service_id";
                $delete = $connection->prepare($deleteQuery);
                $delete->bindParam(":service_id", $service_id);
                $delete->execute();

                // Redirect to avoid resubmission on refresh
                header("Location: " . $_SERVER['PHP_SELF']);
                exit();
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
                <h1 id="total_services"><?php echo count($fetchAll) ?></h1>
                <div class="btn">Manage services</div>
            </div>
        </div>
    </div>
    <!-- navBar js -->
    <script src="adminNav.js"></script>

 <hr>
<div id="croud">
<div id="allcrodtableselecte">
    <table>
        <tr> 
            <th>service_name</th>
            <th>DELETE</th>
            <th><a href="adminAdd.html">ADD</a></th>
        </tr>
        <?php if (!empty($fetchAll)) : ?>
            <?php foreach ($fetchAll as $v) : ?>
                <tr>
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <!-- XXXXXXXXXXXXXXX -->
                        <td><a href="edit?id=<?php echo $v['service_id']?>" name="service_name_<?php echo $v['service_id']; ?>" ><?php echo $v['service_name']; ?></a></td>
                        <td><input type="submit" name="edit" value="edit"></td>
                    
                        <td><input type="submit" name="delete_<?php echo $v['service_id']; ?>" value="Delete"></td>
                    </form>
                </tr>
            <?php endforeach; ?>
        <?php endif; ?>
    </table>
</div>
</div>

<script src="CROAD_JS.js"></script>
<script>
    let tour = document.getElementById("tour");
    tour.setAttribute("style", `
        text-shadow: 0 0 2px #031ff4;
        border-bottom: 5px solid #ff601c;
        font-size: 26px;
        font-weight: bold;
        background-image: url('background.jpg');
        background-size: cover; /* or another appropriate value */
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    `);
</script>
</body>
</html>
