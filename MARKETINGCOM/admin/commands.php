<?php 
require_once('../backend/config/connect.php');
$sql = 'SELECT user_name, service_name, date , service_details FROM commander INNER JOIN user USING(user_id) INNER JOIN service USING(service_id) ';
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

var_dump($result);
?>

<?$result?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
</head>
<body>

    
</body>
</html>