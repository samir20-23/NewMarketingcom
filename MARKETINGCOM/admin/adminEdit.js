const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const nameUrl = urlParams.get("name");
const verification = urlParams.get("name");

//
let selectedImageDiv = document.getElementById("selectedImage");
let submit = document.getElementById("submit");
let cancel = document.getElementById("cancel");
let manage = document.getElementById("manage");
let hr = document.getElementById("hr");
let croud = document.getElementById("croud");
let back = document.getElementById("back");
let add = document.getElementById("add");
let error = document.getElementById("error");
let service_price = document.getElementById("service_price");

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
if (verification === "sebservice") {
  if (service_price) {
    service_price.style.display = "block";
    // xxxxxxxxx
    let service_img_element = document.getElementById("service_img");
    let service_name = document.getElementById("service_name");

    let formData = new FormData();
    formData.append("typee", verification);
    formData.append("serviceName", service_name.value);
    formData.append("servicePrice", service_price.value);
    formData.append("serviceImg", service_img);
    formData.append("id", id);

    let request = new XMLHttpRequest();
    request.open("POST", "adminEdit.php");
    request.send(formData);
    request.onload = () => {
      let response = JSON.parse(request.response);
      console.log(response);
      service_name.value = response.service_name;
      service_price.value = response.service_price;
      service_img_element.value = service_img = "";
      selectedImageDiv.style.backgroundImage = `url("../frontend/${response.service_img}")`;
      selectedImageDiv.style.backgroundSize = "cover";
    };
    // submit
    submit.addEventListener("click", () => {
      let service_img = document.getElementById("service_img").files[0];
      let service_img_element = document.getElementById("service_img");
      let service_name = document.getElementById("service_name");
      let service_price = document.getElementById("service_price");
      // service_price

      let formData = new FormData();
      formData.append("typee", verification);
      formData.append("serviceName", service_name.value);
      formData.append("servicePrice", service_price.value);
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
          error.innerHTML = "Please select an image for this sub-service";
          error.style.color = "red";
        }
        if (response == "namempty") {
          error.innerHTML = "Please give a name to this sub-service!";
          error.style.color = "red";
        }
        if (response == "pricempty") {
          error.innerHTML = "Please give a price to this sub-service!";
          error.style.color = "red";
        }
        if (response == "verified") {
          error.innerHTML = "sub-service has been edited succesfully";
          error.style.color = "green";
          service_name.value = "";
          service_price.value = "";
          service_img_element.value = "";
          selectedImageDiv.style.backgroundImage = "";
        }
      };
    });
    // submit

    // xxxxxxxxxxx

    document.querySelector(".title").innerHTML = "Edit Sub-Service";
    document.querySelector(".label_text").innerHTML =
      "Select a Sub-Service image";
    document
      .querySelector("#service_name")
      .setAttribute("placeholder", "Sub-Service name");
    document
      .querySelector("#service_price")
      .setAttribute("placeholder", "Sub-Service price");
  } //ELSEEEEEEEEEEEEEEEEEE
}

if (verification === "service") {
  service_price.style.display = "none";

  //   event.preventDefault(); // Prevent the default form submission
  //   let service_img = document.getElementById("service_img").files[0];
  let service_img_element = document.getElementById("service_img");
  let service_name = document.getElementById("service_name");

  let formData = new FormData();
  formData.append("typee", verification);
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
    selectedImageDiv.style.backgroundImage = `url("../frontend/${response.service_img}")`;
    selectedImageDiv.style.backgroundSize = "cover";

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

  submit.addEventListener("click", () => {
    let service_img = document.getElementById("service_img").files[0];
    let service_img_element = document.getElementById("service_img");
    let service_name = document.getElementById("service_name");

    let formData = new FormData();
    formData.append("typee", verification);
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
} //heeeeeeeer

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
if (verification === "option") {
  document.getElementById("title").innerHTML = "Edit Service options";
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

  let formData = new FormData();
  formData.append("typee", verification);
  formData.append("primaryOption", primary_options.value);
  formData.append("secondaryOption", secondary_options.value);
  formData.append("lastOption", last_options.value);
  formData.append("id", id);

  let request = new XMLHttpRequest();
  request.open("POST", "adminEdit.php");
  request.send(formData);
  request.onload = () => {
    let response = JSON.parse(request.response);
    console.log(response);

    const last_options = response.optionn[0].last_options.replace(/,/g," | | ");
    const primary_options = response.optionn[0].primary_options.replace(/,/g," | | ");
    const secondary_options = response.optionn[0].secondary_options.replace(/,/g, " | | ");
    console.log(last_options);

    document.getElementById("optionInput1").value = primary_options;
    document.getElementById("optionInput2").value = secondary_options;
    document.getElementById("optionInput3").value = last_options;
  };

  // cansel

  submit.addEventListener("click", () => {
    const last_options = response.optionn[0].last_options.replace(/ \| \| /g, ',');
    const primary_options = response.optionn[0].primary_options.replace(/ \| \| /g, ',');
    const secondary_options = response.optionn[0].secondary_options.replace(/ \| \| /g, ','); 
    let formData = new FormData();
    formData.append("typee", verification);
    formData.append("primaryOption", primary_options);
    formData.append("secondaryOption", secondary_options);
    formData.append("lastOption", last_options);
    formData.append("id", id);
    formData.append("update", "update");

    let request = new XMLHttpRequest();
    request.open("POST", "adminEdit.php");
    request.send(formData);
    request.onload = () => {
      let response = request.response;
      console.log(response);

      if (response == "primaryempty") {
        error.innerHTML = "Please select an primary for this sub-service";
        error.style.color = "red";
      }
      if (response == "secondaryempty") {
        error.innerHTML = "Please give a secondary to this sub-service!";
        error.style.color = "red";
      }
      if (response == "lastempty") {
        error.innerHTML = "Please give a last option to this sub-service!";
        error.style.color = "red";
      }
      if (response == "verified") {
        error.innerHTML = "succesfully";
        error.style.color = "green";
        primary_options.value = "";
        secondary_options.value = "";
        last_options.value = "";
      }
    };
  });
} //heeeeeeeer
// xxxxxxxxxxxxxxx

cancel.addEventListener("click", () => {
  window.location = "adminPage.html";
});
