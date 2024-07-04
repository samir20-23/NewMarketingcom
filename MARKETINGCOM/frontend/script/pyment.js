let cancel = document.getElementById("cancel");

const urlParams = new URLSearchParams(window.location.search);
const service_id = urlParams.get("id");
const service_options = localStorage.getItem("options");
const fullName = localStorage.getItem("userName");
const phoneNumber = localStorage.getItem("userPhone");
let method = document.querySelectorAll(".method");

console.log(method)

console.log(service_id + " " + service_options + " " + fullName + " " + phoneNumber)

method.forEach(element => {
  element.addEventListener("click", () => {
    window.location = `pymentForm.html?id=${service_id}&number=${phoneNumber}`;
  })
});

cancel.addEventListener("click", () => {
  window.history.back();
});


//To send data to database --------------------------------------------------------------------

// submit.addEventListener("click", () => {
//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", `../backend/userActivity.php`, true);
//   var formData = new FormData();
//   formData.append("command", "command");
//   formData.append("phone_number", phoneNumber);
//   formData.append("user_name", fullName);
//   formData.append("service_id", service_id);
//   formData.append("service_details", service_options);

//   xhr.send(formData);
//   xhr.onload = function () {
//     if (xhr.status >= 200 && xhr.status < 400) {
//       let response = xhr.responseText;
//       console.log(response);

//     } else {
//       console.error("Request failed with status:", xhr.status);
//     }
//   };

//   xhr.onerror = function () {
//     console.error("Request failed");
//   };
// });