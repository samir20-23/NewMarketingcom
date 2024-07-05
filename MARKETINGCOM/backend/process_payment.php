<?php
// require '../../vendor/autoload.php';
// require_once 'config/connect.php';
// require_once __DIR__ . '/../../vendor/stripe/stripe-php/init.php';

$service_id = $_POST['id'];
$number = $_POST['number'];
$serviceOptions = $_POST['options'];
$serviceOptions = substr($serviceOptions, 1, -1);
$OptionsfinalState = "'" . $serviceOptions . "'";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    $stmt = $conn->query("SELECT service_price FROM service WHERE service_id = $service_id");
    $result = $stmt->fetch();

    $stmt2 = $conn->query("SELECT user_id FROM user WHERE user_phone = $number");
    $result2 = $stmt2->fetch();

    if (!$result) {
        die("Service price not found.");
    }

    if (!$result2) {
        die("user does not exist with this number: " . $number);
    }

    $price = $result["service_price"];
    $user_id = $result2["user_id"];

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
        die("Please fill all required inputs !");
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

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "INSERT INTO commander (user_id, service_id, date, service_details) VALUES (:user_id, :service_id, now(), ".$OptionsfinalState.")";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':user_id', $user_id);
            $stmt->bindParam(':service_id', $service_id);
            $stmt->bindParam(':service_options', $OptionsfinalState);
            

            $stmt->execute();
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }


        echo 'verified';
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
