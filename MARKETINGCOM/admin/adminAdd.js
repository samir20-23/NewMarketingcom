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
const typee = urlParams.get("name"); 
const serviceId = urlParams.get("serviceId"); 
const typeId = urlParams.get("typeId"); 
  

// formData.append("serviceName", service_name.value); 
//     formData.append("serviceImg", service_img); 
//     formData.append("typee", typee);  
if (typee === "service") {
  document.getElementById("service_img").addEventListener("change", function (event) {
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
    formData.append("serviceImg", service_img); 
    formData.append("typee", typee);  
  
    let request = new XMLHttpRequest();
    request.open("POST", "adminAdd.php");
    request.send(formData);
    request.onload = () => {
      let response = request.responseText;
      console.log(response);
  
      if (response == "imgempty") {
        error.innerHTML = "Please select an image for this Service";
        error.style.color = "red";
      }
       
      if (response == "namempty") {
        error.innerHTML = "Please give a name to this Service!";
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
}




// formData.append("serviceName", service_name.value);
// formData.append("servicePrice", service_price.value);
// formData.append("serviceImg", service_img); 
// formData.append("sebservices", typee);
// formData.append("serviceId", serviceId);
if (typee === "sebservice") { 
  if (service_price) {
    service_price.style.display = "block";
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
  document.querySelector(".title").innerHTML="Add Sub-Service";
  document.querySelector(".label_text").innerHTML="Select a Sub-Service image";
  document.querySelector("#service_name").setAttribute("placeholder","Sub-Service name");

  
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
    formData.append("typee", typee);
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
} else {
  service_price.style.display = "none";
}


 

 
if(typee == "option"){ 
    document.querySelector(".title").innerHTML = "Add Service options";
    document.getElementById("service_price").style.display = "none";
    document.getElementById("service_name").style.display = "none";
    document.getElementById("service_img").style.display = "none";
    document.getElementById("label_img").style.display = "none";
  
    let allinputs = document.getElementById("allinputs");
    let primary_options = document.createElement("textarea");
    let secondary_options = document.createElement("textarea");
    let last_options = document.createElement("textarea");
    primary_options.rows = "4";
    secondary_options.rows = "4";
    last_options.rows = "4";
    primary_options.cols = "50";
    secondary_options.cols = "50";
    last_options.cols = "50";
    primary_options.id = "optionInput1";
    secondary_options.id = "optionInput2";
    last_options.id = "optionInput3";
    allinputs.appendChild(primary_options);
    allinputs.appendChild(secondary_options);
    allinputs.appendChild(last_options);
  
    //  primary_options
    //  secondary_options
    //  last_options
  
            submit.addEventListener("click", () => {
              const last_optionss = last_options.value.replace(/(\s|\.)/g, ',');
              const primary_optionss = primary_options.value.replace(/(\s|\.)/g, ',');
              const secondary_optionss= secondary_options.value.replace(/(\s|\.)/g, ',');
              
              let formData = new FormData();
              formData.append("typee","optionadd");
              formData.append("primaryOption", primary_optionss);
              formData.append("secondaryOption",  secondary_optionss);
              formData.append("lastOption", last_optionss);
              formData.append("id", typeId); 
              let request = new XMLHttpRequest();
              request.open("POST", "adminAdd.php");
              request.send(formData);
              request.onload = () => {
                let response = request.response;
                console.log(response);
          
                if (response == "primaryempty") {
                  error.innerHTML = "Please add primary options to this sub-service";
                  error.style.color = "red";
                }
                if (response == "secondaryempty") {
                  error.innerHTML = "Please add Secondary options to this sub-service";
                  error.style.color = "red";
                }
                if (response == "lastempty") {
                  error.innerHTML = "Please add Last optins primary options to this sub-service";
                  error.style.color = "red";
                }
                if (response == "verified") {
                  error.innerHTML = "Added options successfully";
                  error.style.color = "green";
                  primary_options.value = "";
                  secondary_options.value = "";
                  last_options.value = "";
                }
              };
            });
    };
  
     
  cancel.addEventListener("click", () => {
  window.location="adminPage.html";
}); 