let man = document.getElementById("man");
let woman = document.getElementById("woman");
let nameService = document.querySelectorAll(".nameService");
let price = document.getElementById("price");
let serimg = document.getElementById("serimg");
let error = document.getElementById("error");
let confirmTitle = document.getElementById("confirmTitle");
let confirmP = document.getElementById("confirmP");

// id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// id

// xxxxxxxxxxxxxxxxxxxxxxxx
man.addEventListener("click", () => {
  woman.style.color = "#1dbf73";
  woman.style.background = "white";
  woman.style.border = "2px solid #1dbf73";
  man.style.background = "#1dbf73";
  man.style.color = "white";
});
woman.addEventListener("click", () => {
  man.style.color = "#1dbf73";
  man.style.background = "white";
  man.style.border = "2px solid #1dbf73";
  woman.style.background = "#1dbf73";
  woman.style.color = "white";
});

// form

let confirm = document.getElementById("confirm");
let form = document.getElementById("form");
let cancelForm = document.getElementById("cancelForm");
let page = document.getElementById("page");

cancelForm.addEventListener("click", () => {
  form.style.display = "none";
  page.style.filter = "blur(0px)";
});

// LO9CATION

let cancel = document.getElementById("cancel");
cancel.addEventListener("click", () => {
  window.history.back();
});

// dataaaaaaaaaaaaaaaaaaaaa

let xhr = new XMLHttpRequest();
xhr.open("GET", `marketing.php?service&id=${id}`, true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    let response = JSON.parse(xhr.response);
    console.log(response);
    nameService.forEach((element) => {
      element.innerHTML = response.service_name;
    });
    price.innerHTML = `${response.service_price}$`;
    serimg.src = response.service_img;

    confirm.addEventListener("click", () => {
      // check login

      let userName = localStorage.getItem("userName");
      let userPhone = localStorage.getItem("userPhone");
      if (userName == null || userPhone == null) {
        form.style.display = "flex";
        page.style.filter = "blur(10px)";
      } else {
        form.style.display = "flex";
        page.style.filter = "blur(10px)";

        fullname.value = userName;
        number.value = userPhone;
        fullname.type = "hidden";
        number.type = "hidden";
        confirmTitle.innerHTML = "Cofirm command";
        confirmP.innerHTML = "";
      }
    });
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// open data name

xhr.onerror = function () {
  console.error("Request failed");
};
xhr.send();

// login
//NNNNNNNNNNNNNNNNNNNNNNNNNN

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  let fullname = document.getElementById("fullname");
  let number = document.getElementById("number");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", `userActivity.php`, true);
  var formData = new FormData();
  formData.append("command", "command");
  formData.append("phone_number", number.value);
  formData.append("user_name", fullname.value);
  formData.append("service_id", id);

  // Send the request with the data
  xhr.send(formData);
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      let response = xhr.responseText;
      console.log(response);
      if (response == `"phoneempty"`) {
        error.innerHTML = "please enter phone";
      }
      if (response == `"verified"`) {
        localStorage.setItem("userName", fullname.value);
        localStorage.setItem("userPhone", number.value);
        error.innerHTML = "Command submited successfully !";
        fullname.type = "hidden";
        number.type = "hidden";
        confirmP.innerHTML = "";
      }
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };

  // open data name

  xhr.onerror = function () {
    console.error("Request failed");
  };
});
