let man = document.getElementById("man");
let woman = document.getElementById("woman");
let nameService = document.querySelectorAll(".nameService");
let price = document.getElementById("price");
let serimg = document.getElementById("serimg");
let error = document.getElementById("error");
let confirmTitle = document.getElementById("confirmTitle");
let confirmP = document.getElementById("confirmP");
let btns = document.getElementById("btns");
let selects = document.getElementById("selects");
let whatsapp = document.getElementById("whatsapp")

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
      response.primary_options.forEach(element => {
        btns.innerHTML+=`
       <button id="woman">${element}</button>
      `;
      });
    }else{
      document.getElementById('serviceOptions').style.display = 'none'
    }
    if (response.secondary_options) {
      let secondaryOptions = document.querySelector('.secondary_options')
      response.secondary_options.forEach(element => {
      secondaryOptions.innerHTML+=`
            <option value="${element}">${element}</option>
      `
      });
    }else{
      document.querySelector('.secondary_options').style.display = 'none'
    }

    if (response.last_options) {
      let secondaryOptions = document.querySelector('.last_options')
      response.last_options.forEach(element => {
      secondaryOptions.innerHTML+=`
            <option value="${element}">${element}</option>
      `
      });
    }else{
      document.querySelector('.last_options').style.display = 'none'
    }
    if (!response.secondary_options && !response.last_options ) {
      document.querySelector('.lableOne').style.display = 'none'
    }

    

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

        let mynumber = "+2120718087106";
        whatsapp.addEventListener("click",function(){
          window.location=`https://web.whatsapp.com/send?phone=${mynumber}`;
        })
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
  xhr.open("POST", `../backend/userActivity.php`, true);
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
        error.innerHTML = "please enter phone number";
        error.style.color = "red";
      }
      if (response == `"numberinvald"`) {
        error.innerHTML = "number is invalid";
        error.style.color = "red";
      }
      if (response == `"nameinvalid"`) {
        error.innerHTML = "please enter a valid name";
        error.style.color = "red";
      }
      if (response == `"verified"`) {
        localStorage.setItem("userName", fullname.value);
        localStorage.setItem("userPhone", number.value);
        error.innerHTML = "Command submited successfully !";
        error.style.color = "green";

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
