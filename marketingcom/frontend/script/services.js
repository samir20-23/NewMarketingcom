function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    id: params.get("id"),
    name: params.get("name"),
  };
}

const queryParams = getQueryParams();
const id = queryParams.id;
const sername = `${queryParams.name} >`;

// Now you can use the variables 'id' and 'name' whenever you need them
console.log(id); // Logs the 'id' parameter
console.log(sername); // Logs the 'name' parameter

let serviceImg = document.getElementById("serviceImg");
let serName = document.getElementById("serName");

serName.innerHTML = sername;

// xxxxxx

let xhr = new XMLHttpRequest();
xhr.open("GET", `../backend/marketing.php?sub_service&parent_id=${id}`, true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    let response = JSON.parse(xhr.response);
    console.log(response);
    serviceImg.innerHTML = "";
    response.forEach((element) => {
      console.log(element.service_price);
      serviceImg.innerHTML += ` <div class="service" id="${element.service_id}">
              <img src="${element.service_img}" alt="" />
              <h3 id="${element.service_price}">${element.service_name}</h3>
            </div>`;
    });
    //
    let service = document.querySelectorAll(".service");

    service.forEach((element) => {
      element.addEventListener("click", () => {
        let price = element.querySelector("h3");
        if (price.id == "null") {
          window.location = `services.html?id=${element.id}&name=${price.innerHTML}`;
        } else {
          window.location = `serviceDetails.html?id=${element.id}`;
        }
      });
    });
    //
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// open data name

//
xhr.onerror = function () {
  console.error("Request failed");
};
xhr.send();

let back = document.getElementById("back");
back.addEventListener("click", () => {
  window.history.back();
});

//
