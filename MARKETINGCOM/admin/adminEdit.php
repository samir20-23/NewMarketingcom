<?php
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

// Fetching service details
if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_POST["update"])) {
    $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

    try {
        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $con->prepare("SELECT * FROM $tbname WHERE service_id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        $fetch = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($fetch);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Updating service details
if (isset($_POST["update"])) {
    $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

    if (!empty($_FILES["serviceImg"]) && $_FILES['serviceImg']['error'] == UPLOAD_ERR_OK) {
        if (!empty($_POST["serviceName"])) {
            $serviceImg = moveUploadedFile($_FILES["serviceImg"], $uploads_dir);

            if ($serviceImg) {
                $serviceName = filter_var($_POST["serviceName"], FILTER_SANITIZE_STRING);
                $serviceImgPro = "images/" . $serviceImg;

                try {
                    $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                    $stmt = $con->prepare("UPDATE $tbname SET service_name = :serviceName, service_img = :serviceImg WHERE service_id = :id");
                    $stmt->bindParam(':serviceName', $serviceName, PDO::PARAM_STR);
                    $stmt->bindParam(':serviceImg', $serviceImgPro, PDO::PARAM_STR);
                    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                    $stmt->execute();

                    echo "verified";
                } catch (PDOException $e) {
                    echo "Error: " . $e->getMessage();
                }
            } else {
                echo "Invalid file upload";
            }
        } else {
            echo "namempty";
        }
    } else {
        echo "imgempty";
    }
}