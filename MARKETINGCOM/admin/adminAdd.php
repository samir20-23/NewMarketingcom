<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include "config.php";

    $error = "";
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

                    echo "verified";
                } catch (PDOException $e) {
                    echo "error: " . $e->getMessage();
                }
            } else {
                echo "invalid";
            }
        } else {
            echo "namempty";
        }
    } else {
        echo "imgempty";
    }
}