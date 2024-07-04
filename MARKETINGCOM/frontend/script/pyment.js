let cancel = document.getElementById("cancel");

const urlParams = new URLSearchParams(window.location.search);
const service_id = urlParams.get("id").replace(/"/g, '');
const service_options = JSON.parse(localStorage.getItem("options"));
const fullName = localStorage.getItem("userName");
const phoneNumber = localStorage.getItem("userPhone");
const successInput = document.querySelector('input[name=return]');
const priceInput = document.querySelector('input[name=amount]');
const itemNameInput = document.querySelector('input[name=item_name]');
const itemIdInput = document.querySelector('input[name=item_number]');
let method = document.querySelectorAll(".method");

console.log(service_options.primary_options)
itemIdInput.value = service_id
successInput.value +=`?item_id=${service_id}&`
// adding primary option to the success achet url 
if (service_options.primary_options.length > 0 && service_options.primary_options[0]!=='') {
  successInput.value +=`primary_options=${service_options.primary_options[0]}`
}
service_options.primary_options.forEach((element, index) => {
  if (index != 0) successInput.value +=`-${element}`;
});
// adding secondary and last option to the success achet url
if (service_options.second_option !== '') successInput.value +=`&second_option=${service_options.second_option}`;
if (service_options.last_option !== '') successInput.value +=`&last_option=${service_options.last_option}`;
// adding user info to the success achet url
successInput.value +=`&phone=${phoneNumber}&user_name=${fullName}`;

// geting service info by id
let xhr = new XMLHttpRequest();
xhr.open("GET", `../backend/marketing.php?service&id=${service_id}`, true);
xhr.onload = function () {
  let response = JSON.parse(xhr.response);
  if (xhr.status >= 200 && xhr.status < 400) {
    priceInput.value = response[0].service_price
    itemNameInput.value = response[0].service_name
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};
xhr.onerror = function () {
  console.error("Request failed");
};
xhr.send();

method.forEach(element => {
  element.addEventListener("click", () => {
    window.location = `pymentForm.html?id=${service_id}`;
  })
});

cancel.addEventListener("click", () => {
  window.history.back();
});
