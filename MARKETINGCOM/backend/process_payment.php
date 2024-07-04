<?php
require '../../vendor/autoload.php';
require_once '../backend/config/connect.php';
require_once __DIR__ . '/../../vendor/stripe/stripe-php/init.php';

$id = $_POST['id'];

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    $stmt = $conn->query("SELECT service_price FROM service WHERE service_id = $id");
    $result = $stmt->fetch();

    if (!$result) {
        die("Service price not found.");
    }

    $price = $result["service_price"];
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;
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
                'exp_year' => '20' . $exp_year, // Ensure the year is in the correct format
                'cvc' => $cvv,
                'name' => $card_name,
            ],
        ]);

        $charge = \Stripe\Charge::create([
            'amount' => $price * 100, // Convert to cents
            'currency' => 'usd',
            'source' => $token->id,
            'description' => 'Example charge',
        ]);

        echo 'Payment successful! Amount charged: $' . number_format($price, 2);
    } catch (\Stripe\Exception\CardException $e) {
        echo 'Card declined: ' . $e->getError()->message;
    } catch (\Stripe\Exception\RateLimitException $e) {
        echo 'Too many requests made to the API too quickly: ' . $e->getMessage();
    } catch (\Stripe\Exception\InvalidRequestException $e) {
        echo 'Invalid parameters were supplied to Stripe\'s API: ' . $e->getMessage();
    } catch (\Stripe\Exception\AuthenticationException $e) {
        echo 'Authentication with Stripe\'s API failed: ' . $e->getMessage();
    } catch (\Stripe\Exception\ApiConnectionException $e) {
        echo 'Network communication with Stripe failed: ' . $e->getMessage();
    } catch (\Stripe\Exception\ApiErrorException $e) {
        echo 'Stripe API error: ' . $e->getMessage();
    } catch (Exception $e) {
        echo 'An unexpected error occurred: ' . $e->getMessage();
    }
}