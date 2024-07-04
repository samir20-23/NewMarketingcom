<?php
session_start();
if (!isset($_SESSION['admin'])) {
    echo json_encode("getout");
    die();
}

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

    $typee = $_POST["typee"];

    if ($typee == "service") {

        if (!empty($_FILES["serviceImg"]) && $_FILES['serviceImg']['error'] == UPLOAD_ERR_OK) {
            if (!empty($_POST["serviceName"])) {
                $serviceImg = moveUploadedFile($_FILES["serviceImg"], $uploads_dir);

                if ($serviceImg) {
                    $serviceName = filter_var($_POST["serviceName"], FILTER_SANITIZE_STRING);
                    $serviceImgPro = "images/" . $serviceImg;
                    // formData.append("serviceName", service_name.value); 
                    //     formData.append("serviceImg", service_img); 
                    //     formData.append("typee", typee);
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

    // ---------------------
    if ($typee == "sebservice") {
        $serviceId = $_POST["serviceId"];

        if (!empty($_FILES["serviceImg"]) && $_FILES['serviceImg']['error'] == UPLOAD_ERR_OK) {
            if (!empty($_POST["serviceName"])) {
                $serviceImg = moveUploadedFile($_FILES["serviceImg"], $uploads_dir);

                if ($serviceImg) {
                    if (empty($_POST["servicePrice"])) {
                        $servicePrice = null;
                    } else {
                        $servicePrice = filter_var($_POST["servicePrice"], FILTER_SANITIZE_STRING);
                    }

                    $serviceName = filter_var($_POST["serviceName"], FILTER_SANITIZE_STRING);
                    $serviceImgPro = "images/" . $serviceImg;

                    try {
                        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                        $insert = $con->prepare("INSERT INTO $tbname (service_name,service_price, service_img) VALUES(:serviceName,:servicePrice, :serviceImg)");
                        $insert->bindParam(":serviceName", $serviceName);
                        $insert->bindParam(":servicePrice", $servicePrice);
                        $insert->bindParam(":serviceImg", $serviceImgPro);

                        $insert->execute();
                        $lastInsertedId = $con->lastInsertId();
                        //  relation
                        $insertRelation = $con->prepare("INSERT INTO relation (service_id,ser_service_id) VALUES(:serviceId,:sebServiceId)");
                        $insertRelation->bindParam(":serviceId", $serviceId);
                        $insertRelation->bindParam(":sebServiceId", $lastInsertedId);

                        $insertRelation->execute();
                        // relation

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

    if ($typee == "optionadd") {
        $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

        if (!empty($_POST["primaryOption"])) {
            if (!empty($_POST["secondaryOption"])) {
                if (!empty($_POST["lastOption"])) {

                    $primaryOption = filter_var($_POST["primaryOption"], FILTER_SANITIZE_STRING);
                    $secondaryOption = filter_var($_POST["secondaryOption"], FILTER_SANITIZE_STRING);
                    $lastOption = filter_var($_POST["lastOption"], FILTER_SANITIZE_STRING);

                    try {
                        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                        $stmt = $con->prepare("INSERT INTO service_options (primary_options, secondary_options, last_options, service_id) VALUES (:primaryOption, :secondaryOption, :lastOption, :id)");
                        $stmt->bindParam(':primaryOption', $primaryOption, PDO::PARAM_STR);
                        $stmt->bindParam(':secondaryOption', $secondaryOption, PDO::PARAM_STR);
                        $stmt->bindParam(':lastOption', $lastOption, PDO::PARAM_STR);
                        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                        $stmt->execute();

                        echo "verified";
                    } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                } else {
                    echo "lastempty";
                }
            } else {
                echo "secondaryempty";
            }
        } else {
            echo "primaryempty";
        }
    }
}



// xxxxxxxxxxxxxxxxxxxx
