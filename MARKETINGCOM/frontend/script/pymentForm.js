const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const number = urlParams.get("number");

let cardNumber = document.getElementById("card_number");
let expDate = document.getElementById("exp_date");
let cvv = document.getElementById("cvv");
let cardName = document.getElementById("card_name");
let errorForm = document.getElementById("errorForm");
let errorDiv = document.getElementById("error");

// Accessing the form submit button
let payButton = document.querySelector('#payment-form button[type="submit"]');

payButton.addEventListener("click", () => {
  let request = new XMLHttpRequest();
  request.open("POST", "../backend/process_payment.php");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(
    "card_number=" +
      cardNumber.value +
      "&exp_date=" +
      expDate.value +
      "&cvv=" +
      cvv.value +
      "&card_name=" +
      cardName.value +
      "&id=" +
      id +
      "&number=" +
      number
  );
  request.onload = () => {
    let response = request.response;
    console.log(response);
    if (response == "verified") {
      window.location = "paymentFinish.html";
    } else {
      errorDiv.style.display = "flex";
      errorForm.innerHTML = response;
    }
  };
});