<?php
require_once('config/connect.php');
if (isset($_POST['command'])) {
    $serviceOptions = json_encode($_POST['service_details']);
    $serviceOptions = substr($serviceOptions, 1, -1);
    $OptionsfinalState = "'" . $serviceOptions . "'";
    $sql = 'INSERT INTO commander
        VALUES ((SELECT user_id FROM user WHERE user_phone = "' . $_POST['phone_number'] . '"), ' . $_POST['service_id'] . ', NOW(), ' . $OptionsfinalState . ');';
    $stmt = $conn->prepare($sql);
    $stmt->execute();
}
