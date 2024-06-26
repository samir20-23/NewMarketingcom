<?php
require_once 'config/connect.php';
//get only the head parents services
if (isset($_GET['services'])) { 
    $sql = 'SELECT s.service_id, s.service_name, s.service_id, s.service_img
    FROM service s
    LEFT JOIN relation r ON s.service_id = r.ser_service_id
    WHERE r.service_id IS NULL;
    ';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}

// gets children services of a service by id
if(isset($_GET['sub_service'])){ 
    $sql = 'SELECT s.service_id, s.service_name, s.service_id, s.service_img
    FROM service s
    JOIN relation r ON s.service_id = r.ser_service_id
    WHERE r.service_id = :parent_service_id';
    $stmt = $conn->prepare($sql);
    $stmt->execute(array('parent_service_id'=>$_GET['parent_id']));
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
}

// 
if(isset($_GET['service'])){ 
    $sql = 'SELECT s.service_id, s.service_name, s.service_id, s.service_img, s.service_price
    FROM service s
    WHERE s.service_id = :parent_service_id';
    $stmt = $conn->prepare($sql);
    $stmt->execute(array('parent_service_id'=>$_GET['id']));
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($result);

}