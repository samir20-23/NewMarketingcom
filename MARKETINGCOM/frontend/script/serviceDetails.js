let man = document.getElementById("man");
let nameService = document.querySelectorAll(".nameService");
let price = document.getElementById("price");
let serimg = document.getElementById("serimg");
let error = document.getElementById("error");
let confirmTitle = document.getElementById("confirmTitle");
let confirmP = document.getElementById("confirmP");
let btns = document.getElementById("btns");
let selects = document.getElementById("selects");
let whatsapp = document.getElementById("whatsapp");
let selecterr = document.getElementById("selecterr");
let selected_options = document.getElementById("selected_options");
let reload = document.getElementById("reload");
reload.style.display = "none";
let responsestate = document.getElementById("response_state");
// RELOAD
// id
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
// id

// select options
// let xhr = new XMLHttpRequest();
// xhr.open("GET", `marketing.php?service&id=${id}`, true);
// xhr.onload = function () {
//   if (xhr.status >= 200 && xhr.status < 400) {
//     let response = JSON.parse(xhr.response);
//     console.log(response);
//   }
// };

// open data name

// xhr.onerror = function () {
//   console.error("Request failed");
// };
// xhr.send();

//                              select options

// xxxxxxxxxxxxxxxxxxxxxxxx
// man.addEventListener("click", () => {
//   woman.style.color = "#1497DF";
//   woman.style.background = "white";
//   woman.style.border = "2px solid #1497DF";
//   man.style.background = "#1497DF";
//   man.style.color = "white";
// });
// woman.addEventListener("click", () => {
//   man.style.color = "#1497DF";
//   man.style.background = "white";
//   man.style.border = "2px solid #1497DF";
//   woman.style.background = "#1497DF";
//   woman.style.color = "white";
// });

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
xhr.open("GET", `../backend/marketing.php?service&id=${id}`, true);
xhr.onload = function () {
  let response = JSON.parse(xhr.response);
  if (xhr.status >= 200 && xhr.status < 400) {
    console.log(response);
    nameService.forEach((element) => {
      element.innerHTML = response[0].service_name;
    });
    price.innerHTML = `${response[0].service_price}$`;
    serimg.src = response[0].service_img;

    if (response.primary_options) {
      responsestate.value = "full";
      response.primary_options.forEach((element) => {
        btns.innerHTML += `
       <button class="options">${element}</button>
      `;
      });
      let options = document.querySelectorAll(".options");
      options.forEach((element) => {
        element.addEventListener("click", () => {
          element.classList.toggle("selected");
        });
      });
    } else {
      responsestate.value = "empty";
      document.getElementById("serviceOptions").style.display = "none";
    }
    if (response.secondary_options) {
      let secondaryOptions = document.querySelector(".secondary_options");
      response.secondary_options.forEach((element) => {
        secondaryOptions.innerHTML += `
            <option value="${element}">${element}</option>
      `;
      });
    } else {
      document.querySelector(".secondary_options").style.display = "none";
    }

    if (response.last_options) {
      let secondaryOptions = document.querySelector(".last_options");
      response.last_options.forEach((element) => {
        secondaryOptions.innerHTML += `
            <option value="${element}">${element}</option>
      `;
      });
    } else {
      document.querySelector(".last_options").style.display = "none";
    }
    if (!response.secondary_options && !response.last_options) {
      document.querySelector(".lableOne").style.display = "none";
    }

    confirm.addEventListener("click", () => {
      //selected options
      let second_option = document.getElementById("second").value;
      let last_option = document.getElementById("last").value;
      let primary_options = document.querySelectorAll(".selected");
      let selectedInnerHTML = Array.from(primary_options)
        .map((element) => element.innerHTML)
        .join(", ");
      if (selectedInnerHTML != "" || responsestate.value == "empty") {
        let commandOptions = JSON.stringify({
          primary_options: selectedInnerHTML.split(","),
          second_option: second_option,
          last_option: last_option,
        });
        selecterr.innerHTML = "";
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
        selected_options.value = commandOptions;
        //whatsapp wwwwwwwwwwww
        let serviceName = document.getElementById("title").innerHTML;
        let mynumber = "+2120718087106";
        let message = `SERVICE: ${serviceName}\n\nPRIMARY OPTIONS:\n - ${selectedInnerHTML
          .split(",")
          .join(
            "\n - "
          )}\n\nSECONDARY OPTIONS:\n - ${second_option}\n - ${last_option}`;
        whatsapp.addEventListener("click", function () {
          reload.style.display = "flex";
          setTimeout(() => {
            reload.style.display = "none";
          }, 2500);
          window.open(
            `https://web.whatsapp.com/send?phone=${mynumber}&text=${encodeURIComponent(
              message
            )}`,
            "_blank"
          );
        });
      } else {
        selecterr.innerHTML = "please select a primary option!";
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

let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  if (fullname.value != "") {
    if (number.value != "") {
      localStorage.setItem("userName", fullname.value);
      localStorage.setItem("userPhone", number.value);
      localStorage.setItem("options", selected_options.value);
      window.location = `pyment.html?id="${id}"`;
    } else {
      error.innerHTML = "please enter phone number";
      error.style.color = "red";
    }
  } else {
    error.innerHTML = "please enter a valid name";
    error.style.color = "red";
  }
});