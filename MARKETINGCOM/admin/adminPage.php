<?php
$host = "localhost";
$database = "marketingcom";
$table = "service";
$usrname = "root";
$passcode = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && !isset($_POST["delete"]) && !isset($_POST["deleteOption"])) {

    try {
        $conn = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = 'SELECT s.service_id, s.service_name, s.service_price, s.service_img FROM service s LEFT JOIN relation r ON s.service_id = r.ser_service_id WHERE r.service_id IS NULL;';
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["services" => $result, "length" => count($result)]);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["delete"])) {
    $service_id = $_POST["id"];
    $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    try {
        // Start a transaction
        $connection->beginTransaction();

        // Select the service image path
        $selectQuery = "SELECT service_img FROM $table WHERE service_id=:service_id";
        $select = $connection->prepare($selectQuery);
        $select->bindParam(":service_id", $service_id);
        $select->execute();
        $result = $select->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            $serviceImgPath = "../frontend/" . $result['service_img'];

            // Delete related rows in the service_options table
            $deleteServiceOptionsQuery = "DELETE FROM service_options WHERE service_id=:service_id";
            $deleteServiceOptions = $connection->prepare($deleteServiceOptionsQuery);
            $deleteServiceOptions->bindParam(":service_id", $service_id);
            $deleteServiceOptions->execute();

            // Delete related rows in the relation table where service_id or ser_service_id matches
            $deleteRelationsQuery = "DELETE FROM relation WHERE service_id=:service_id OR ser_service_id=:service_id";
            $deleteRelations = $connection->prepare($deleteRelationsQuery);
            $deleteRelations->bindParam(":service_id", $service_id);
            $deleteRelations->execute();

            // Delete sub-services that reference the main service
            $deleteSubServicesQuery = "DELETE FROM $table WHERE service_id IN (SELECT ser_service_id FROM relation WHERE service_id=:service_id)";
            $deleteSubServices = $connection->prepare($deleteSubServicesQuery);
            $deleteSubServices->bindParam(":service_id", $service_id);
            $deleteSubServices->execute();

            // Delete the main service
            $deleteQuery = "DELETE FROM $table WHERE service_id=:service_id";
            $delete = $connection->prepare($deleteQuery);
            $delete->bindParam(":service_id", $service_id);
            $delete->execute();

            // Delete the service image file
            if (file_exists($serviceImgPath)) {
                unlink($serviceImgPath);
            }

            // Commit the transaction
            $connection->commit();

            echo "verified";
        } else {
            echo "Record not found.";
        }
    } catch (PDOException $e) {
        // Roll back the transaction if something failed
        $connection->rollBack();
        echo "Error deleting record: " . $e->getMessage();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["deleteOption"]) && !isset($_POST["delete"])) {

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $service_id = $_POST["id"];
        $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try {
            $deleteServiceOptionsQuery = "DELETE FROM service_options WHERE option_id = :service_id";
            $deleteServiceOptions = $connection->prepare($deleteServiceOptionsQuery);
            $deleteServiceOptions->bindParam(":service_id", $service_id);
            $deleteServiceOptions->execute();

            echo "verified";
        } catch (PDOException $e) {
            "AN ERROR HAPPENED" . $e->getMessage();
        }
    }
}