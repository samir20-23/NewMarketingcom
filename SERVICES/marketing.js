let services = document.getElementById("services");

let request = new XMLHttpRequest();
request.open("GET", "marketing.php?services");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
request.onload = () => {
  let response = JSON.parse(request.response);
  console.log(response)
  response.forEach((item) => {
    services.innerHTML += `<div class="service" id="${item.service_id}">
            <img src="${item.service_img}" class="icons" />
            <h3 class="service-title">${item.service_name}</h3>
          </div>`;
  });

  let service = document.querySelectorAll(".service");


  service.forEach((element) => {
    element.addEventListener("click", () => {
      window.location = `services.html?id=${element.id}`;
    });
  });
};

// 