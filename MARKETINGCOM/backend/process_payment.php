<?php
require '../../vendor/autoload.php';
require_once '../backend/config/connect.php';

$id = $_POST['id'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    // set the PDO error mode to exception

    $stmt = $conn->query("SELECT service_price FROM service where service_id = $id");
    $result = $stmt->fetch();

    $price = $result["service_price"];

    if (!$result) {
        die("Service price not found.");
    }

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}



\Stripe\Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $card_number = $_POST['card_number'];
    $exp_date = $_POST['exp_date'];
    $cvv = $_POST['cvv'];
    $card_name = $_POST['card_name'];

    if (empty($card_name) || empty($card_number) || empty($cvv) || empty($exp_date)) {
        die("Please enter all information.");
    }

    // Split expiration date into month and year
    $exp_month = substr($exp_date, 0, 2);
    $exp_year = substr($exp_date, 3, 2);

    try {
        $token = \Stripe\Token::create([
            'card' => [
                'number' => $card_number,
                'exp_month' => $exp_month,
                'exp_year' => $exp_year,
                'cvc' => $cvv,
                'name' => $card_name,
            ],
        ]);

        $charge = \Stripe\Charge::create([
            'amount' => $price, // Amount in cents (e.g., $10.00)
            'currency' => 'usd',
            'source' => $token->id,
            'description' => 'Example charge',
        ]);

        echo 'Payment successful!';
    } catch (\Stripe\Exception\CardException $e) {
        echo 'Error: ' . $e->getError()->message;
    } catch (\Stripe\Exception\ApiErrorException $e) {
        echo 'Error: ' . $e->getMessage();
    } catch (Exception $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
