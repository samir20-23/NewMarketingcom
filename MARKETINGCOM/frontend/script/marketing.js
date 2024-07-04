document.addEventListener("DOMContentLoaded", () => {
  let services = document.getElementById("services");
  let close = document.getElementById("close");
  let notificationBox = document.getElementById("notificationBox");
  let homepage = document.getElementById("page");
  let learnMore = document.getElementById("learnMore");
  let payment = localStorage.getItem("payment");

  close.addEventListener("click", () => {
    notificationBox.style.display = "none";
    homepage.style.filter = "blur(0px)";
  });

  if (payment) {
    notificationBox.style.display = "flex";
    homepage.style.filter = "blur(4px)";
    localStorage.removeItem("payment");
  }

  let request = new XMLHttpRequest();
  request.open("GET", "../backend/marketing.php?services");
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send();
  request.onload = () => {
    let response = JSON.parse(request.response);
    console.log(response);

    let selectedCount = response.length >= 12 ? 12 : response.length;
    displayServices(selectedCount);

    learnMore.addEventListener("click", () => {
      if (selectedCount < response.length) {
        selectedCount += 12;
        if (selectedCount > response.length) {
          selectedCount = response.length;
        }
        displayServices(selectedCount);
      }
    });

    function displayServices(count) {
      services.innerHTML = "";
      for (let i = 0; i < count; i++) {
        services.innerHTML += `<div class="service" name="${response[i].service_name}" id="${response[i].service_id}">
              <img src="${response[i].service_img}" class="icons" />
              <h3 class="service-title">${response[i].service_name}</h3>
            </div>`;
      }
      attachServiceClickHandlers();
    }

    function attachServiceClickHandlers() {
      let serviceElements = document.querySelectorAll(".service");
      serviceElements.forEach((element) => {
        element.addEventListener("click", () => {
          const id = element.id;
          const name = element.getAttribute("name");
          const url = `services.html?id=${id}&name=${name}`;
          window.location.href = url;
        });
      });
    }
  };
});
