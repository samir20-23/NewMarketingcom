let selectedImageDiv = document.getElementById("selectedImage");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let manage = document.getElementById("manage");
let hr = document.getElementById("hr");
let croud = document.getElementById("croud");
let back = document.getElementById("back");
let add = document.getElementById("add");
let service_price = document.getElementById("service_price");
 
const urlParams = new URLSearchParams(window.location.search);
const sebservices = urlParams.get("name"); 
const serviceId = urlParams.get("serviceId"); 
if (sebservices === "sebservice") { 
  if (service_price) {
    service_price.style.display = "block";
  } 
} else {
  service_price.style.display = "none";
}

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

submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission

  let service_name = document.getElementById("service_name");
  let service_img = document.getElementById("service_img").files[0];
  let service_img_element = document.getElementById("service_img");
  let error = document.getElementById("error");

  let formData = new FormData();
  formData.append("serviceName", service_name.value);
  formData.append("servicePrice", service_price.value);
  formData.append("serviceImg", service_img);

  formData.append("sebservices", sebservices);
  formData.append("serviceId", serviceId);

  

  let request = new XMLHttpRequest();
  request.open("POST", "adminAdd.php");
  request.send(formData);
  request.onload = () => {
    let response = request.responseText;
    console.log(response);

    if (response == "imgempty") {
      error.innerHTML = "Please select an image for this Sub-Service";
      error.style.color = "red";
    }
    
    if (response == "pricempty") {
      error.innerHTML = "Please give a price to this Sub-Service!";
      error.style.color = "red";
    }
    if (response == "namempty") {
      error.innerHTML = "Please give a name to this Sub-Service!";
      error.style.color = "red";
    }
    if (response == "verified") {
      error.innerHTML = "Service has been Added succesfully";
      error.style.color = "green";
      service_name.value = "";
      document.getElementById("service_price").value = "";
      service_img_element.value = "";
      selectedImageDiv.style.backgroundImage = "";
    }
  };
});

// cansel
cancel.addEventListener("click", () => {
  window.location="adminPage.html";
});


// seb  transform

if (sebservices === "sebservice") { 
  
  document.querySelector(".title").innerHTML="Add Sub-Service";
  document.querySelector(".label_text").innerHTML="Select a Sub-Service image";
  document.querySelector("#service_name").setAttribute("placeholder","Sub-Service name");

}