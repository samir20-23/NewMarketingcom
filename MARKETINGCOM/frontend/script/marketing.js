let services = document.getElementById("services");
let close = document.getElementById("close");
let notificationBox = document.getElementById("notificationBox");

let payment = localStorage.getItem("payment");

close.addEventListener("click", () => {
  notificationBox.style.display = "none";
});

if (payment) {
  notificationBox.style.display = "flex";
  localStorage.removeItem("payment");
}

let request = new XMLHttpRequest();
request.open("GET", "../backend/marketing.php?services");
request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send();
request.onload = () => {
  let response = JSON.parse(request.response);
  console.log(response);
  response.forEach((item) => {
    services.innerHTML += `<div class="service" name="${item.service_name}" id="${item.service_id}">
            <img src="${item.service_img}" class="icons" />
            <h3  class="service-title">${item.service_name}</h3>
          </div>`;
  });

  let service = document.querySelectorAll(".service");

  service.forEach((element) => {
    element.addEventListener("click", () => {
      const id = element.id;
      const name = element.getAttribute("name");
      const url = `services.html?id=${id}&name=${name}`;
      window.location = url;
    });
  });
};

//
