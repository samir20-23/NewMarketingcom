let whatsapp = document.getElementById("whatsapp");
let cancel = document.getElementById("cancel");
let isRequestSent = false;
const urlParams = new URLSearchParams(window.location.search);
const service_id = urlParams.get("item_id");
const primaryOptions =
  urlParams.get("primary_options") != null
    ? urlParams.get("primary_options").split("-")
    : null;
const secondOption = urlParams.get("second_option");
const last_option = urlParams.get("last_option");
const phoneNumber = urlParams.get("phone");
const userName = urlParams.get("user_name");

let mynumber = "+2120718087106";
whatsapp.addEventListener("click", () => {
  window.open(`https://web.whatsapp.com/send?phone=${mynumber}`, "_blank");
});

cancel.addEventListener("click", () => {
  localStorage.setItem("payment", "done");
  window.location = "index.html";
});
// inserting command to db
  let xhr = new XMLHttpRequest();
  xhr.open("POST", `../backend/userActivity.php`, true);
  var formData = new FormData();
  formData.append("command", "command");
  formData.append("phone_number", phoneNumber);
  formData.append("user_name", userName);
  formData.append("service_id", service_id);
  formData.append("service_details", getServiceOptionJson());

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let response = xhr.responseText;
      console.log(response);
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("Request failed");
  };
  xhr.send(formData);


function getServiceOptionJson(
  primary = primaryOptions,
  second = secondOption,
  last = last_option
) {
  if (primary === null) primary = [];
  if (second === null) second = "";
  if (last === null) last = "";
  let data = {
    primary_options: primary,
    second_option: second,
    last_option: last,
  };
  return JSON.stringify(data);
}
