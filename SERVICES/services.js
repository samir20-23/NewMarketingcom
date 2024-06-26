const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let serviceImg = document.getElementById("serviceImg");

// xxxxxx

let xhr = new XMLHttpRequest();
xhr.open("GET", `marketing.php?sub_service&parent_id=${id}`, true);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    let response = JSON.parse(xhr.response);
    console.log(response);
    serviceImg.innerHTML = "";
    response.forEach((element) => {
      serviceImg.innerHTML += ` <div class="service" id="${element.service_id}">
              <img src="${element.service_img}" alt="" />
              <h3>${element.service_name}</h3>
            </div>`;
    });
    //
    let service = document.querySelectorAll(".service");

    service.forEach((element) => {
      element.addEventListener("click", () => {
        window.location = `serviceDetails.html?id=${element.id}`;
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
  window.location = "index.html";
});

// 


