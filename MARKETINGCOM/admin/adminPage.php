<?php
$host = "localhost";
$database = "marketingcom";
$table = "service";
$usrname = "root";
$passcode = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_POST["delete"])) {

    try {
        $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        $select = $connection->query("SELECT service_id, service_name  FROM $table WHERE service_price is NULL ");
        $fetchAll = $select->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["services" => $fetchAll, "length" => count($fetchAll)]);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    $service_id = $_POST["id"];
    $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
        // Select the service image path
        $selectQuery = "SELECT service_img FROM $table WHERE service_id=:service_id";
        $select = $connection->prepare($selectQuery);
        $select->bindParam(":service_id", $service_id);
        $select->execute();
        $result = $select->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            $serviceImgPath = "../frontend/" . $result['service_img'];

            // Delete related rows in the relation table
            $deleteRelationsQuery = "DELETE FROM relation WHERE service_id=:service_id";
            $deleteRelations = $connection->prepare($deleteRelationsQuery);
            $deleteRelations->bindParam(":service_id", $service_id);
            $deleteRelations->execute();

            // Delete the service
            $deleteQuery = "DELETE FROM $table WHERE service_id=:service_id";
            $delete = $connection->prepare($deleteQuery);
            $delete->bindParam(":service_id", $service_id);
            $delete->execute();

            // Delete the service image file
            if (file_exists($serviceImgPath)) {
                unlink($serviceImgPath);
            }

            echo "verified";
        } else {
            echo "Record not found.";
        }
    } catch (PDOException $e) {
        echo "Error deleting record: " . $e->getMessage();
    }
}
