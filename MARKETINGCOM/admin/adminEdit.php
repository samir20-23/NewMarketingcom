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
   
    try {
        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if(filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "service" || filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "sebservice"){
            $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);

            $stmt = $con->prepare("SELECT * FROM $tbname WHERE service_id = :id");
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();

        $fetch = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($fetch);
        }
        if(filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "option"){ 
            $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);


            $selectRelation = $con->prepare("SELECT option_id, primary_options, secondary_options, last_options, service_id FROM service_options WHERE option_id = :id ");
            $selectRelation->execute(['id' => $id]);
            $relatedServices = $selectRelation->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode(["optionn" => $relatedServices]);
         

        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Updating service details


if (isset($_POST["update"])) {
    

    if(filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "service"){
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
    } if(filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "sebservice"){
        $id = filter_var($_POST['id'], FILTER_SANITIZE_NUMBER_INT);
        if (!empty($_FILES["serviceImg"]) && $_FILES['serviceImg']['error'] == UPLOAD_ERR_OK) {
            if (!empty($_POST["serviceName"])) {
                if (!empty($_POST["servicePrice"])) {
                $serviceImg = moveUploadedFile($_FILES["serviceImg"], $uploads_dir);
               
                if ($serviceImg) {
                    $serviceName = filter_var($_POST["serviceName"], FILTER_SANITIZE_STRING);
                    $servicePrice = filter_var($_POST["servicePrice"], FILTER_SANITIZE_STRING);
                 
                    $serviceImgPro = "images/" . $serviceImg;
                   
    
                    try {
                        $con = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
                        $stmt = $con->prepare("UPDATE $tbname SET service_name = :serviceName , service_price = :servicePrice, service_img = :serviceImg WHERE service_id = :id");
                        $stmt->bindParam(':serviceName', $serviceName, PDO::PARAM_STR);
                        $stmt->bindParam(':servicePrice', $servicePrice, PDO::PARAM_STR);
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
            }else{
                echo "pricempty";
            }
            } else {
                echo "namempty";
            }
        } else {
            echo "imgempty";
        }
    }
    

    // optiossssssssssssssssssssssssssssssssssssssss
    
    
    if(filter_var($_POST["typee"], FILTER_SANITIZE_STRING) == "option"){ 
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
    
                        $stmt = $con->prepare("UPDATE service_options SET primary_options = :primaryOption , secondary_options = :secondaryOption, last_options = :lastOption WHERE option_id = :id");
                        $stmt->bindParam(':primaryOption', $primaryOption, PDO::PARAM_STR);
                        $stmt->bindParam(':secondaryOption', $secondaryOption, PDO::PARAM_STR);
                        $stmt->bindParam(':lastOption', $lastOption, PDO::PARAM_STR);
                        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
                        $stmt->execute();
    
                        echo "verified";
                    } catch (PDOException $e) {
                        echo "Error: " . $e->getMessage();
                    }
                 
            }else{
                echo "lastempty";
            }
            }else{
                echo "secondaryempty";
            }
            } else {
                echo "primaryempty";
            }
        
    }
}


// option 
// formData.append("typee",verification);
// formData.append("primaryOption", primary_options.value);
// formData.append("secondaryOption", secondary_options.value);
// formData.append("lastOption", last_options.value);
//   formData.append("id", id);
//   formData.append("update", "update");