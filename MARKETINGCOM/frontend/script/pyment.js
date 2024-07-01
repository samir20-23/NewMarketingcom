let cancel = document.getElementById("cancel");

const urlParams = new URLSearchParams(window.location.search);
const service_id = urlParams.get("id");
const service_options = localStorage.getItem("options");
const fullName = localStorage.getItem("userName");
const phoneNumber = localStorage.getItem("userPhone");

console.log(service_id + " " + service_options + " " + fullName + " " + phoneNumber)

cancel.addEventListener("click", () => {
  window.history.back();
});