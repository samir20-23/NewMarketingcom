<?php

$host = "localhost";
$database = "marketingcom";
$usrname = "root";
$passcode = "";

$id = $_POST["optionId"];
$price = $_POST["optionPrice"];
$relatedServices = [];
if ($_SERVER["REQUEST_METHOD"] == "POST" && $price != "null") {


    try {
        $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $selectRelation = $connection->prepare("SELECT option_id, primary_options, secondary_options, last_options, service_id FROM service_options WHERE service_id = :id ");
        $selectRelation->execute(['id' => $id]);
        $relatedServices = $selectRelation->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["optionn" => $relatedServices, "length" => count($relatedServices)]);
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
}


// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

if ($_SERVER["REQUEST_METHOD"] == "POST" && $price = "null") {

    try {
        $connection = new PDO("mysql:host=$host;dbname=$database", $usrname, $passcode);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $selectRelation = $connection->prepare("SELECT option_id, primary_options, secondary_options, last_options, service_id FROM service_options WHERE service_id = :id");
        $selectRelation->execute(['id' => $id]);
        $relatedServices = $selectRelation->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode(["optionn" => $relatedServices, "length" => count($relatedServices),"servicess"=>"servicess"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
}
