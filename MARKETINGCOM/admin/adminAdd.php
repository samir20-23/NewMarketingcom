<?php
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include "config.php";

    $uploads_dir = '../frontend/images/';

    function moveUploadedFile($file, $uploads_dir)
    {
        $original_name = basename($file["name"]);
        $target_path = $uploads_dir . $original_name;
        if (move_uploaded_file($file["tmp_name"], $target_path)) {
            return $original_name;
        }
        return false;
    }

    if (!empty($_FILES["serviceImg"]) && $_FILES['serviceImg']['error'] == UPLOAD_ERR_OK) {
        if (!empty($_POST["serviceName"])) {
            $serviceImg = moveUploadedFile($_FILES["serviceImg"], $uploads_dir);

            if ($serviceImg) {
                $serviceName = filter_var($_POST["serviceName"], FILTER_SANITIZE_STRING);
                $serviceImgPro = "images/" . $serviceImg;

                try {
                    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    $insert = $con->prepare("INSERT INTO $tbname (service_name, service_img) VALUES(:serviceName, :serviceImg)");
                    $insert->bindParam(":serviceName", $serviceName);
                    $insert->bindParam(":serviceImg", $serviceImgPro);

                    $insert->execute();

                    $error = "valid";
                } catch (PDOException $e) {
                    echo "error: " . $e->getMessage();
                }
            } else {
                $error = "invalidupload";
            }
        } else {
            $error = "emptyname";
        }
    } else {
        $error = "emptyimg";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="adminAdd.css">
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
            <h1 class="title">Add Service</h1>
            <form class="form" method="POST" enctype="multipart/form-data">
                <label class="img_select" for="service_img">
                    <div class="label_text">Select a service image</div>
                </label>
                <input type="file" name="serviceImg" id="service_img" class="service_img">
                <input class="input" type="text" name="serviceName" id="service_name" placeholder="Service name">
                <input class="input" type="submit" name="submit" id="submit" value="Add">
                <div class="input" class="cancel" id="cancel">Cancel</div>
                <p id="error"><?php echo $error ?></p>
            </form>
        </div>
    </div>
    <!-- navBar js -->
    <script src="adminNav.js"></script>
</body>

</html>