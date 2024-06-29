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
    echo json_encode(["services"=>$fetchAll, "length"=>count($fetchAll)]);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}


// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     foreach ($_POST as $key => $value) {
//         if (strpos($key, 'delete_') === 0) {
//             $service_id = str_replace('delete_', '', $key);
//             try {

//                 $selectQuery = "SELECT service_img FROM $table WHERE service_id=:service_id";
//                 $select = $connection->prepare($selectQuery);
//                 $select->bindParam(":service_id", $service_id);
//                 $select->execute();
//                 $result = $select->fetch(PDO::FETCH_ASSOC);

//                 if ($result) {
//                     $serviceImgPath = "../frontend/" . $result['service_img'];


//                     $deleteQuery = "DELETE FROM $table WHERE service_id=:service_id";
//                     $delete = $connection->prepare($deleteQuery);
//                     $delete->bindParam(":service_id", $service_id);
//                     $delete->execute();


//                     if (file_exists($serviceImgPath)) {
//                         unlink($serviceImgPath);
//                     }


//                     header("Location: " . $_SERVER['PHP_SELF']);
//                     exit();
//                 } else {
//                     echo "Record not found.";
//                 }
//             } catch (PDOException $e) {
//                 echo "Error deleting record: " . $e->getMessage();
//             }
//         }
//     }
// }