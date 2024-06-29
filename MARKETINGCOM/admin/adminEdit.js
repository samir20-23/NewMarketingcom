const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
//
let allNavBar = document.getElementById("allNavBar");
let iconNavBar = document.getElementById("iconNavBar");
let selectedImageDiv = document.getElementById("selectedImage");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let manage = document.getElementById("manage");
let hr = document.getElementById("hr");
let croud = document.getElementById("croud");
let back = document.getElementById("back");
let add = document.getElementById("add");
let error = document.getElementById("error");

let click = "";
iconNavBar.addEventListener("click", () => {
  click = "click";

  if (click == "click") {
    allNavBar.setAttribute("style", " animation: moveNavBar 0.01s alternate");
    allNavBar.innerHTML = `
    <div id="navBar" class="navBar"> 
  <div id="divIconNavBar"><i class="fa fa-times" id="clossNavBar" aria-hidden="true"></i></div> 
  <div id="contentNavBar">
    <button id="home">Home</button>
    <button id="logIn">Log In</button>
    <button id="contact">Contact Us</button>
  </div> 
</div>
    `;

    // click home login contact
    let home = document.getElementById("home");
    home.addEventListener("click", () => {
      window.location = "adminPage.php";
    });
    let logIn = document.getElementById("logIn");
    logIn.addEventListener("click", () => {
      window.location = "";
    });
    let contact = document.getElementById("contact");
    contact.addEventListener("click", () => {
      window.location = "";
    });
  } else {
    allNavBar.innerHTML = "";
  }

  let clossNavBar = document.getElementById("clossNavBar");
  clossNavBar.addEventListener("click", () => {
    allNavBar.setAttribute("style", "");
    click = "";
    if (click == "") {
      allNavBar.innerHTML = "";
    }
  });
});

service_img.addEventListener("change", function (event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      selectedImageDiv.style.backgroundImage = `url(${e.target.result})`;
      selectedImageDiv.style.backgroundSize = "cover";
      selectedImageDiv.style.backgroundPosition = "center";
    };
    reader.readAsDataURL(file);
  }
});

//   event.preventDefault(); // Prevent the default form submission
//   let service_img = document.getElementById("service_img").files[0];
let service_img_element = document.getElementById("service_img");
let service_name = document.getElementById("service_name");

let formData = new FormData();
formData.append("serviceName", service_name.value);
formData.append("serviceImg", service_img);
formData.append("id", id);

let request = new XMLHttpRequest();
request.open("POST", "adminEdit.php");
request.send(formData);
request.onload = () => {
  let response = JSON.parse(request.response);
  console.log(response);
  service_name.value = response.service_name;
  service_img_element.value = service_img = "";
//   selectedImageDiv.style.backgroundImage = `url(../frontend/${response.service_img})`;

  //   if (response == "imgempty") {
  //     error.innerHTML = "Please select an image for this service";
  //     error.style.color = "red";
  //   }
  //   if (response == "namempty") {
  //     error.innerHTML = "Please give a name to this service!";
  //     error.style.color = "red";
  //   }
  //   if (response == "verified") {
  //     error.innerHTML = "A new service has been added successfully";
  //     error.style.color = "green";
  //     service_name.value = "";
  //     service_img_element.value = "";
  //     selectedImageDiv.style.backgroundImage = "";
  //   }
};

// cansel
cancel.addEventListener("click", () => {
  window.location="adminPage.html";
});

submit.addEventListener("click", () => {
  let service_img = document.getElementById("service_img").files[0];
  let service_img_element = document.getElementById("service_img");
  let service_name = document.getElementById("service_name");

  let formData = new FormData();
  formData.append("serviceName", service_name.value);
  formData.append("serviceImg", service_img);
  formData.append("id", id);
  formData.append("update", "update");
  
  let request = new XMLHttpRequest();
  request.open("POST", "adminEdit.php");
  request.send(formData);
  request.onload = () => {
    let response = request.response;
    console.log(response);

      if (response == "imgempty") {
        error.innerHTML = "Please select an image for this service";
        error.style.color = "red";
      }
      if (response == "namempty") {
        error.innerHTML = "Please give a name to this service!";
        error.style.color = "red";
      }
      if (response == "verified") {
        error.innerHTML = "Service has been edited succesfully";
        error.style.color = "green";
        service_name.value = "";
        service_img_element.value = "";
        selectedImageDiv.style.backgroundImage = "";
      }
  };
});
