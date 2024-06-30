<?php
$host = "localhost";
$database = "marketingcom";
$usrname = "root";
$passcode = "";

$id = $_POST['id'];

try {
    $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch related services IDs
    $selectRelation = $connection->prepare("SELECT ser_service_id FROM relation WHERE service_id = :id");
    $selectRelation->execute(['id' => $id]);
    $fetchSer = $selectRelation->fetchAll(PDO::FETCH_ASSOC);

    $relatedServices = [];
    foreach ($fetchSer as $value) {
        $idser = $value['ser_service_id'];
        $select = $connection->prepare("SELECT service_id, service_name, service_price FROM service WHERE service_id = :idser AND service_price IS NOT NULL");
        $select->execute(['idser' => $idser]);
        $relatedServices = array_merge($relatedServices, $select->fetchAll(PDO::FETCH_ASSOC));
    }

    echo json_encode(["serservices" => $relatedServices, "length" => count($relatedServices)]);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
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


// xxxxxxxxxxxxxxx

// <?php
// $host = "localhost";
// $database = "marketingcom";
// $table = "service";
// $usrname = "root";
// $passcode = "";


// // semds 
// $id =$_POST['id'];

// try {
//     $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
//     $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//     $selectRelation =$connection->query("SELECT service_id, ser_service_id    FROM relation WHERE $id ");
//     $selectRelation->execute();

//     $select = $connection->query("SELECT service_id, service_name,service_price  FROM $table WHERE service_price is NOT NULL  ");
//     $fetchAll = $select->fetchAll(PDO::FETCH_ASSOC);
//     echo json_encode(["serservices"=>$fetchAll, "length"=>count($fetchAll)]);

    
    
// } catch (PDOException $e) {
//     echo "Error: " . $e->getMessage();
// }

