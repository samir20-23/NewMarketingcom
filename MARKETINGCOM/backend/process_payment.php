<?php
require '../../vendor/autoload.php';


\Stripe\Stripe::setApiKey('sk_test_4eC39HqLyjWDarjtT1zdp7dc'); 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $card_number = $_POST['card_number'];
    $exp_date = $_POST['exp_date'];
    $cvv = $_POST['cvv'];
    $card_name = $_POST['card_name'];

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
            'amount' => 1000, // Amount in cents (e.g., $10.00)
            'currency' => 'usd',
            'source' => $token->id,
            'description' => 'Example charge',
        ]);

        echo 'Payment successful!';
    } catch (\Stripe\Exception\CardException $e) {
        echo 'Error: ' . $e->getError()->message;
    }
}
?>